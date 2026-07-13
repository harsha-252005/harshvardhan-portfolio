import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const API = import.meta.env.VITE_API_URL || 'http://localhost:8081';
const api = async (path, options) => {
  const response = await fetch(`${API}${path}`, { headers: { 'Content-Type': 'application/json' }, ...options });
  if (!response.ok) throw new Error('Something went wrong. Please try again.');
  return response.status === 204 ? null : response.json();
};
const initials = (text = 'G') => text.trim().split(/\s+/).map(x => x[0]).join('').slice(0, 2).toUpperCase();
const palette = ['violet', 'coral', 'mint', 'gold'];

function App() {
  const [forums, setForums] = useState([]);
  const [topics, setTopics] = useState([]);
  const [comments, setComments] = useState([]);
  const [query, setQuery] = useState('');
  const [view, setView] = useState('home');
  const [selected, setSelected] = useState(null);
  const [showComposer, setShowComposer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const [forumData, topicData, commentData] = await Promise.all([
        api('/collectforumrecords'), api('/collecttopicrecords'), api('/collectcommentrecords')
      ]);
      setForums(forumData); setTopics(topicData); setComments(commentData);
    } catch (error) { setNotice('Unable to reach the API. Start the Spring backend on port 8081.'); }
    finally { setLoading(false); }
  };
  useEffect(() => { load(); }, []);
  const visibleTopics = useMemo(() => topics.filter(t => `${t.topictitle} ${t.topicontent}`.toLowerCase().includes(query.toLowerCase())), [topics, query]);
  const openTopic = (topic) => { setSelected(topic); setView('topic'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const submitTopic = async ({ title, content }) => {
    await api('/inserttopicrecord', { method: 'POST', body: JSON.stringify({ topictitle: title, topicontent: content, topicviews: 0, wordcount: content.trim().split(/\s+/).filter(Boolean).length }) });
    setShowComposer(false); setNotice('Your discussion is live.'); load();
  };
  const submitComment = async (text) => {
    await api('/insertcommentrecord', { method: 'POST', body: JSON.stringify({ comments: text, type: 'reply', status: 'published', reportedcount: 0, topicId: selected.topicId }) });
    setNotice('Reply posted.'); load();
  };
  const topicComments = comments.filter(c => c.topicId === selected?.topicId);

  return <div className="app-shell">
    <header className="topbar"><a className="brand" onClick={() => setView('home')}><span>✦</span> gather</a><nav><a className={view === 'home' ? 'active' : ''} onClick={() => setView('home')}>Discover</a><a onClick={() => setView('latest')}>Latest</a><a onClick={() => setView('about')}>About</a></nav><div className="top-actions"><label className="search"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search conversations" /></label><button className="avatar" title="Your profile">NP</button></div></header>
    {notice && <div className="notice">{notice}<button onClick={() => setNotice('')}>×</button></div>}
    {view === 'topic' && selected ? <TopicPage topic={selected} comments={topicComments} onBack={() => setView('home')} onReply={submitComment} /> : <>
      <section className="hero"><div className="eyebrow">A PLACE TO THINK OUT LOUD</div><h1>Good conversations<br/><em>start here.</em></h1><p>Gather is a thoughtful community for curious people. Ask questions, share what you know, and find your people.</p><button className="primary" onClick={() => setShowComposer(true)}>Start a discussion <span>→</span></button><div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div></section>
      <main className="content"><section className="section-heading"><div><span className="section-kicker">EXPLORE</span><h2>Find your corner</h2></div><button className="text-button" onClick={() => setShowComposer(true)}>Create a space +</button></section>
      <div className="forum-grid">{forums.length ? forums.map((forum, index) => <article className={`forum-card ${palette[index % palette.length]}`} key={forum.forumId}><div className="forum-icon">{['◒','⌁','✣','◈'][index % 4]}</div><div><h3>{forum.forumname}</h3><p>{forum.forumdescription || 'A welcoming space for lively conversation.'}</p><button onClick={() => setView('latest')}>Browse discussions →</button></div></article>) : <EmptyForums onCreate={() => setShowComposer(true)} />}</div>
      <section className="section-heading feed-heading"><div><span className="section-kicker">THE PULSE</span><h2>{query ? 'Search results' : 'Happening now'}</h2></div><button className="text-button" onClick={() => setView('latest')}>View all discussions →</button></section>
      {loading ? <div className="loading">Loading conversations…</div> : <div className="topic-list">{visibleTopics.slice(0, view === 'latest' ? undefined : 5).map((topic, index) => <TopicRow key={topic.topicId} topic={topic} index={index} onOpen={openTopic} />)}{!visibleTopics.length && <div className="empty">No discussions yet. Be the first to start one.</div>}</div>}
      </main></>}
    <footer><span>✦ gather</span><p>A quieter corner of the internet.</p><p>Made for conversations that count.</p></footer>
    {showComposer && <Composer onClose={() => setShowComposer(false)} onSubmit={submitTopic} />}
  </div>;
}
function TopicRow({ topic, index, onOpen }) { return <article className="topic-row" onClick={() => onOpen(topic)}><div className={`author-mark ${palette[index % palette.length]}`}>{initials(topic.topictitle)}</div><div className="topic-copy"><div className="meta">COMMUNITY DISCUSSION <i>•</i> JUST NOW</div><h3>{topic.topictitle}</h3><p>{topic.topicontent}</p><div className="stats"><span>♡ {topic.likescount || 0}</span><span>◌ {topic.replyscount || 0} replies</span><span>◉ {topic.topicviews || 0} views</span></div></div><span className="arrow">→</span></article> }
function EmptyForums({ onCreate }) { return <div className="empty forums-empty"><h3>Build the first space</h3><p>Add a discussion below, or use the API to create a forum category.</p><button className="text-button" onClick={onCreate}>Start talking →</button></div> }
function TopicPage({ topic, comments, onBack, onReply }) { const [text, setText] = useState(''); const submit = async e => { e.preventDefault(); if (!text.trim()) return; await onReply(text); setText(''); }; return <main className="topic-page"><button className="back" onClick={onBack}>← All discussions</button><div className="topic-detail"><div className="meta">COMMUNITY DISCUSSION <i>•</i> OPEN CONVERSATION</div><h1>{topic.topictitle}</h1><p>{topic.topicontent}</p><div className="topic-actions"><button>♡ Appreciate</button><button>↗ Share</button><span>◉ {topic.topicviews || 0} views</span></div></div><section className="replies"><h2>{comments.length} {comments.length === 1 ? 'reply' : 'replies'}</h2>{comments.map((comment, i) => <article className="reply" key={comment.id}><div className={`author-mark ${palette[(i+1)%4]}`}>G</div><div><b>Gather member</b><span>just now</span><p>{comment.comments}</p></div></article>)}<form className="reply-form" onSubmit={submit}><label>ADD TO THE CONVERSATION</label><textarea value={text} onChange={e => setText(e.target.value)} placeholder="Share your perspective…" /><button className="primary">Post reply <span>→</span></button></form></section></main> }
function Composer({ onClose, onSubmit }) { const [title, setTitle] = useState(''); const [content, setContent] = useState(''); const [sending, setSending] = useState(false); const submit = async e => { e.preventDefault(); if (!title.trim() || !content.trim()) return; setSending(true); try { await onSubmit({ title, content }); } finally { setSending(false); } }; return <div className="modal-backdrop"><form className="composer" onSubmit={submit}><button className="close" type="button" onClick={onClose}>×</button><span className="section-kicker">START A DISCUSSION</span><h2>What’s on your mind?</h2><input autoFocus value={title} onChange={e => setTitle(e.target.value)} placeholder="Give your discussion a clear title" /><textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Add context, a question, or your perspective…" /><button className="primary" disabled={sending}>{sending ? 'Publishing…' : 'Publish discussion →'}</button></form></div> }
createRoot(document.getElementById('root')).render(<App />);

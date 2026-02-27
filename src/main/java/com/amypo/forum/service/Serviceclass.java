package com.amypo.forum.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.amypo.forum.entity.AdminEntity;
import com.amypo.forum.entity.BadgeEntity;
import com.amypo.forum.entity.CommentEntity;
import com.amypo.forum.entity.Entityclass;
import com.amypo.forum.entity.ForumsEntity;
//import com.amypo.forum.entity.ForumsEntity;
import com.amypo.forum.entity.PostEntity;
import com.amypo.forum.entity.SmtpEntity;
import com.amypo.forum.entity.TopicsEntity;
import com.amypo.forum.pojo.Pojo;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import com.amypo.forum.forumrepository.Adrepo;
import com.amypo.forum.forumrepository.ComRepo;
import com.amypo.forum.forumrepository.Forumrepository;
import com.amypo.forum.forumrepository.ForumrepositoryAdmin;
import com.amypo.forum.forumrepository.ForumrepositoryBadge;
import com.amypo.forum.forumrepository.ForumrepositoryComment;
import com.amypo.forum.forumrepository.ForumrepositoryForums;
import com.amypo.forum.forumrepository.ForumrepositoryPost;
import com.amypo.forum.forumrepository.ForumrepositoryTopic;
import com.amypo.forum.forumrepository.ParentForum;
import com.amypo.forum.forumrepository.SmtpRepo;
import com.amypo.forum.forumrepository.UserProfilerepo;
import com.amypo.forum.forumrepository.UserRepo;


@Service
public class Serviceclass {
	
	@Autowired
	Forumrepository repo;
	
	@Autowired
	ForumrepositoryForums repotwo;
	
	@Autowired
	ForumrepositoryTopic repothree;
	
	@Autowired
	ForumrepositoryPost repofour;
	
	@Autowired
	ForumrepositoryComment repofive;
	
	@Autowired
	ForumrepositoryBadge reposix;
	
	@Autowired
	ForumrepositoryAdmin reposeven;
	
	@Autowired
	JavaMailSender sender;
	
	@Autowired
	SmtpRepo smtprepo;
	
	@Autowired
	UserRepo userrepo;
	
	@Autowired
	UserProfilerepo prorepo;
	
	@Autowired
	ComRepo comrepo;
	
	@Autowired
	Adrepo adrepo;
	
	@Autowired
	ParentForum par;


	public static void main(String[] args) {
		String url="jdbc:mysql://localhost:3306/employee_details";
		String username="root";
		String password="root";
		
		try(Connection con=DriverManager.getConnection(url, username, password)){
			if(con!=null) {
				System.out.println("Connection Established");
			}
			else
			{
				System.out.println("Not established");
			}
		}
		
		catch(SQLException exp) {
			System.out.println("Failed to connect db"+exp.getMessage());
		}
	}
	
	
	public List<Entityclass> fetchUserDetails(){
		return repo.findAll();
	}
	
	public Entityclass createRecords(Entityclass data) {
		return repo.save(data);
	}
	
	public String deleteRecordById(int users_id) {
		
		if(repo.existsById(users_id)) {
		        repo.deleteById(users_id);
		        return "data deleted successfully";
		}
		else
		{
			return "data not found";
		}
	}
	
	public String updateByRecord(Entityclass data,int users_id) {
		if(repo.existsById(users_id)) {
	        repo.save(data);
	        return "data updated successfully";
	}
	else
	{
		return "data not updated";
	}
	}
	
	
	
	public List<ForumsEntity> fetchForumDetails(){
		return repotwo.findAll();
	}
	
	public ForumsEntity createForumRecords(ForumsEntity data2) {
		return repotwo.save(data2);
	}
	
	public String deleteForumRecordById(int forumId) {
		
		if(repotwo.existsById(forumId)) {
		        repotwo.deleteById(forumId);
		        return "data deleted successfully";
		}
		else
		{
			return "data not found";
		}
	}
	
	public String updateForumByRecord(ForumsEntity data2,int forumId) {
		if(repotwo.existsById(forumId)) {
	        repotwo.save(data2);
	        return "data updated successfully";
	}
	else
	{
		return "data not updated";
	}
	}
	
	
	public List<TopicsEntity> fetchTopicDetails(){
		return repothree.findAll();
	}
	
	public TopicsEntity createTopicRecords(TopicsEntity data3) {
		return repothree.save(data3);
	}
	
	public String deleteTopicRecordById(int topicId) {
		
		if(repothree.existsById(topicId)) {
			repothree.deleteById(topicId);
		        return "data deleted successfully";
		}
		else
		{
			return "data not found";
		}
	}
	
	public String updateTopicByRecord(TopicsEntity data3,int topicId) {
		if(repothree.existsById(topicId)) {
			repothree.save(data3);
	        return "data updated successfully";
	}
	else
	{
		return "data not updated";
	}
	}
	
	
	
	public List<PostEntity> fetchPostDetails(){
		return repofour.findAll();
	}
	
	public PostEntity createPostRecords(PostEntity data4) {
		return repofour.save(data4);
	}
	
	public String deletePostRecordById(int users_id) {
		
		if(repofour.existsById(users_id)) {
			repofour.deleteById(users_id);
		        return "data deleted successfully";
		}
		else
		{
			return "data not found";
		}
	}
	
	public String updatePostByRecord(PostEntity data4,int users_id) {
		if(repofour.existsById(users_id)) {
			repofour.save(data4);
	        return "data updated successfully";
	}
	else
	{
		return "data not updated";
	}
	}
	
	
	public List<CommentEntity> fetchCommentDetails(){
		return repofive.findAll();
	}
	
	public CommentEntity createCommentRecords(CommentEntity data5) {
		return repofive.save(data5);
	}
	
	public String deleteCommentRecordById(int id) {
		
		if(repofive.existsById(id)) {
			repofive.deleteById(id);
		        return "data deleted successfully";
		}
		else
		{
			return "data not found";
		}
	}
	
	public String updateCommentByRecord(CommentEntity data5,int id) {
		if(repofive.existsById(id)) {
			repofive.save(data5);
	        return "data updated successfully";
	}
	else
	{
		return "data not updated";
	}
	}
	
	
	
	public List<BadgeEntity> fetchBadgeDetails(){
		return reposix.findAll();
	}
	
	public BadgeEntity createBadgeRecords(BadgeEntity data6) {
		return reposix.save(data6);
	}
	
	public String deleteBadgeRecordById(int badge_id) {
		
		if(reposix.existsById(badge_id)) {
			reposix.deleteById(badge_id);
		        return "data deleted successfully";
		}
		else
		{
			return "data not found";
		}
	}
	
	public String updateBadgeByRecord(BadgeEntity data6,int badge_id) {
		if(reposix.existsById(badge_id)) {
			reposix.save(data6);
	        return "data updated successfully";
	}
	else
	{
		return "data not updated";
	}
	}
	
	
	public List<AdminEntity> fetchAdminDetails(){
		return reposeven.findAll();
	}
	
	public AdminEntity createAdminRecords(AdminEntity data7) {
		return reposeven.save(data7);
	}
	
	public String deleteAdminRecordById(int id) {
		
		if(reposeven.existsById(id)) {
			reposeven.deleteById(id);
		        return "data deleted successfully";
		}
		else
		{
			return "data not found";
		}
	}
	
	public String updateAdminByRecord(AdminEntity data7,int id) {
		if(reposeven.existsById(id)) {
			reposeven.save(data7);
	        return "data updated successfully";
	}
	else
	{
		return "data not updated";
	}
	}
	
	public String saveSmtpData(String receiver, String subject, String content) {
		try
		{
			MimeMessage msg=sender.createMimeMessage();
			
			MimeMessageHelper msgHelper=new MimeMessageHelper(msg);
			
			msgHelper.setTo(receiver);
			msgHelper.setSubject(subject);
			msgHelper.setText(content);
			sender.send(msg);
			
		    SmtpEntity entity=new SmtpEntity();
			entity.setReceiver(receiver);
			entity.setSubject(subject);
			entity.setContent(content);
			smtprepo.save(entity);
			
			return "Mail sent successfully";
					  
	}
		catch(MessagingException e)
		{
			return "Mail not send"+e.getMessage();
		}
	}


	public Entityclass createUserRecords(Entityclass data) {
		return userrepo.save(data);

	}


	public PostEntity createUserProfileRecords(PostEntity info) {
		return prorepo.save(info);

	}


	public CommentEntity createStuRecords(CommentEntity studata) {
		return comrepo.save(studata);

	}


	public AdminEntity createTeacherRecords(AdminEntity trdata) {
		return adrepo.save(trdata);

	}
	
	public List<Entityclass> fetchname(String usersName) {
		
		return repo.findByUsersNameStartsWith(usersName);
	}

	public List<Entityclass> fetchlastname(String usersName) {
		
		return repo.findByUsersNameEndsWith(usersName);
	}
	
	public List<Entityclass> fetchContainsName(String usersName) {
		
		return repo.findByUsersNameContains(usersName);
	}
	
	public List<Entityclass> fetchContaining(String usersName) {
		return repo.findByUsersNameContaining(usersName);
	}
	public List<Entityclass> fetchNotContaining(String usersName) {
		return repo.findByUsersNameNotContaining(usersName);
	}
	
public List<ForumsEntity> getSortedRecords(int pageno, int pagesize, String sortname) {
		
		Pageable page=PageRequest.of(pageno, pagesize, Sort.by(sortname).ascending());
		
		return repotwo.findAll(page).getContent();
	}


public ForumsEntity newconnection(ForumsEntity member) {
	  
	TopicsEntity top=repothree.findById(member.getTopic().get(0).getTopicId()).orElse(null);
	if(top!=null) {
		member.setTopic(List.of(top));
	}
	return par.save(member);
}
}
package com.amypo.forum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.amypo.forum.entity.AdminEntity;
import com.amypo.forum.entity.BadgeEntity;
import com.amypo.forum.entity.CommentEntity;
import com.amypo.forum.entity.Entityclass;
import com.amypo.forum.entity.ForumsEntity;
import com.amypo.forum.entity.PostEntity;
import com.amypo.forum.entity.TopicsEntity;
import com.amypo.forum.pojo.Pojo;
import com.amypo.forum.service.Serviceclass;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class Controllerclass {
	
	@Autowired
	Serviceclass service;
	

    @GetMapping("/collectuserrecords")
    public List<Entityclass> fetchUserRecords()
    {
		return service.fetchUserDetails();
    	
    }
    
    @PostMapping("/insertrecord")
    public Entityclass insertRecord(@RequestBody Entityclass data) {
		return service.createRecords(data);
    	
    }
    
    @DeleteMapping("/deleterecordsbyId/{users_id}")
    public String deleteRecordId(@PathVariable int users_id) {
    	return service.deleteRecordById(users_id);
    }
    
    @PutMapping("/updaterecord/{users_id}")
    public String updateRecords(@PathVariable int users_id,@RequestBody Entityclass data ) {
    	return service.updateByRecord( data,users_id);
    }
    
    
    
    @GetMapping("/collectforumrecords")
    public List<ForumsEntity> fetchForumRecords()
    {
		return service.fetchForumDetails();
    	
    }
    
    @PostMapping("/insertforumrecord")
    public ForumsEntity insertForumRecord(@RequestBody ForumsEntity data2) {
		return service.createForumRecords(data2);
    	
    }
    
    @DeleteMapping("/deleterecordsforumbyId/{forumId}")
    public String deleteForumRecordId(@PathVariable int forumId) {
    	return service.deleteForumRecordById(forumId);
    }
    
    @PutMapping("/updateforumrecord/{forumId}")
    public String updateForumRecords(@PathVariable int forumId,@RequestBody ForumsEntity data2 ) {
    	return service.updateForumByRecord( data2,forumId);
    }
    
    
    @GetMapping("/collecttopicrecords")
    public List<TopicsEntity> fetchTopicRecords()
    {
		return service.fetchTopicDetails();
    	
    }
    
    @PostMapping("/inserttopicrecord")
    public TopicsEntity insertTopicRecord(@RequestBody TopicsEntity data3) {
		return service.createTopicRecords(data3);
    	
    }
    
    @DeleteMapping("/deleterecordstopicbyId/{topicId}")
    public String deleteTopicRecordId(@PathVariable int topicId) {
    	return service.deleteTopicRecordById(topicId);
    }
    
    @PutMapping("/updatetopicrecord/{forum_id}")
    public String updateTopicRecords(@PathVariable("topicId") int topicId,@RequestBody TopicsEntity data3) {
    	return service.updateTopicByRecord( data3,topicId);
    }
    
    
    @GetMapping("/collectpostrecords")
    public List<PostEntity> fetchPostRecords()
    {
		return service.fetchPostDetails();
    	
    }
    
    @PostMapping("/insertpostrecord")
    public PostEntity insertPostRecord(@RequestBody PostEntity data4) {
		return service.createPostRecords(data4);
    	
    }
    
    @DeleteMapping("/deleterecordspostbyId/{users_id}")
    public String deletePostRecordId(@PathVariable int users_id) {
    	return service.deletePostRecordById(users_id);
    }
    
    @PutMapping("/updatepostrecord/{users_id}")
    public String updatePostRecords(@PathVariable int users_id,@RequestBody PostEntity data4) {
    	return service.updatePostByRecord( data4,users_id);
    }
    
    
    @GetMapping("/collectcommentrecords")
    public List<CommentEntity> fetchCommentRecords()
    {
		return service.fetchCommentDetails();
    	
    }
    
    @PostMapping("/insertcommentrecord")
    public CommentEntity insertCommentRecord(@RequestBody CommentEntity data5) {
		return service.createCommentRecords(data5);
    	
    }
    
    @DeleteMapping("/deleterecordscommentbyId/{post_id}")
    public String deleteCommentRecordId(@PathVariable("post_id") int id) {
    	return service.deleteCommentRecordById(id);
    }
    
    @PutMapping("/updatecommentrecord/{post_id}")
    public String updateCommentRecords(@PathVariable("post_id") int id,@RequestBody CommentEntity data5) {
    	return service.updateCommentByRecord( data5,id);
    }
    
    
    @GetMapping("/collectbadgerecords")
    public List<BadgeEntity> fetchBadgeRecords()
    {
		return service.fetchBadgeDetails();
    	
    }
    
    @PostMapping("/insertbadgerecord")
    public BadgeEntity insertBadgeRecord(@RequestBody BadgeEntity data6) {
		return service.createBadgeRecords(data6);
    	
    }
    
    @DeleteMapping("/deleterecordsbadgebyId/{post_id}")
    public String deleteBadgeRecordId(@PathVariable("post_id") int badge_id) {
    	return service.deleteBadgeRecordById(badge_id);
    }
    
    @PutMapping("/updatebadgerecord/{post_id}")
    public String updateBadgeRecords(@PathVariable("post_id") int badge_id,@RequestBody BadgeEntity data6) {
    	return service.updateBadgeByRecord( data6,badge_id);
    }
    
    
    @GetMapping("/collectadminrecords")
    public List<AdminEntity> fetchAdminRecords()
    {
		return service.fetchAdminDetails();
    	
    }
    
    @PostMapping("/insertadminrecord")
    public AdminEntity insertAdminRecord(@RequestBody AdminEntity data7) {
		return service.createAdminRecords(data7);
    	
    }
    
    @DeleteMapping("/deleterecordsadminbyId/{id}")
    public String deleteAdminRecordId(@PathVariable int id) {
    	return service.deleteAdminRecordById(id);
    }
    
    @PutMapping("/updateadminrecord/{post_id}")
    public String updateAdminRecords(@PathVariable("post_id") int id,@RequestBody AdminEntity data7) {
    	return service.updateAdminByRecord( data7,id);
    }
    
    @PostMapping("/smtp")
    public String sendMail(@RequestParam String receiver,@RequestParam String subject,@RequestParam String content)
    {
    	return service.saveSmtpData(receiver,subject,content);
    }
    
    @PostMapping("/userdata")
    public Entityclass insertUserRecord(@RequestBody Entityclass data)
    {
    	return service.createUserRecords(data);
    }
    @PostMapping("/postdata")
    public PostEntity insertUserProfileRecord(@RequestBody PostEntity info)
    {
    	return service.createUserProfileRecords(info);
    }
    @PostMapping("/commentdata")
    public CommentEntity insertStuRecord(@RequestBody CommentEntity studata)
    {
    	return service.createStuRecords(studata);
    }
    @PostMapping("/admindata")
    public AdminEntity insertTeacherRecord(@RequestBody AdminEntity trdata)
    {
    	return service.createTeacherRecords(trdata);
    }
    
    
    @GetMapping("/startswith")
    public List<Entityclass> fetchStartsWith(@RequestParam String usersName){
    	return service.fetchname(usersName);
    }
    
    @GetMapping("/endswith")
    public List<Entityclass> fetchEndsWith(@RequestParam String usersName){
    	return service.fetchlastname(usersName);
    }
    
   @GetMapping("/contains")
    public List<Entityclass> fetchContains(@RequestParam String usersName){
    	return service.fetchContainsName(usersName);
    }
    @GetMapping("/containing")
    public List<Entityclass>fetchContaining(@RequestParam String usersName)
    {
    	return service.fetchContaining(usersName);
    }
    
    @GetMapping("/notcontaining")
    public List<Entityclass>fetchNotContaining(@RequestParam String usersName)
    {
    	return service.fetchNotContaining(usersName);
    }
    
    @GetMapping("/fethpaginationrecords")
    public List<ForumsEntity> fetchPagination(@RequestParam int pageno, @RequestParam int pagesize, @RequestParam String sortname){
    	return service.getSortedRecords(pageno,pagesize,sortname);
    }
    
    @PostMapping("/ManyToMany")
    public ForumsEntity getManyToMany(@RequestBody ForumsEntity table) {
    	return service.newconnection(table);
    }

}

package com.dev.upload.model.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.dev.upload.api.input.UserForm;
import com.dev.upload.api.output.ModificationResult;
import com.dev.upload.model.repo.UserRepo;

@Service
@Transactional(readOnly = true)
public class UserService {

	@Autowired
	private UserRepo repo;
	
	private static final Logger logger = LoggerFactory.getLogger(UserService.class);
	
	private static final String folderName = "upload";
	
	@Transactional
	public ModificationResult<Integer> upload(MultipartFile file, UserForm form) {
		
	  try {
		   var imagesPath = uploadImage(file);
		   logger.info("User Image Path: {}", imagesPath);
		   
		   var entity = repo.save(form.entity(imagesPath));
		   
		   return new ModificationResult<Integer>(entity.getId()) ;	  
		   
	  }catch(Exception e) {
		   throw new RuntimeException(e);
	  }
		
		
	}
	
	
	public String uploadImage(MultipartFile file) throws IOException  { 
		
		var uploadPath = Paths.get(folderName);
		
		if(!Files.exists(uploadPath)) {
			 Files.createDirectories(uploadPath);
		}
		
		var fileName = file.getOriginalFilename();
		var filePath = uploadPath.resolve(fileName);
		Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
		
		return filePath.toString();
		
	}
	
	
}

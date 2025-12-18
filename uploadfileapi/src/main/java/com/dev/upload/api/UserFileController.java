package com.dev.upload.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dev.upload.api.input.UserForm;
import com.dev.upload.api.output.ModificationResult;
import com.dev.upload.model.service.UserService;

@RestController
@RequestMapping("upload")
public class UserFileController {
	
	@Autowired
	private UserService service;
	
	@PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ModificationResult<Integer> upload(@RequestPart("image") MultipartFile file, @ModelAttribute UserForm form ) {
		 
		return service.upload(file,form);
	}
}

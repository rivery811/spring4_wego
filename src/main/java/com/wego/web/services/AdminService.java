package com.wego.web.services;

import org.springframework.stereotype.Component;


import com.wego.web.domains.AdminDTO;
@Component
public interface AdminService {
	
	public void join(AdminDTO param);
	public int findTheNumberOfAdmins();


}

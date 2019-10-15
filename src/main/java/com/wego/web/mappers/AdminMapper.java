package com.wego.web.mappers;

import org.springframework.stereotype.Repository;


import com.wego.web.domains.AdminDTO;

@Repository
public interface AdminMapper {
	public void insertEmployee(AdminDTO param);
	public int countAdmins();
	
}

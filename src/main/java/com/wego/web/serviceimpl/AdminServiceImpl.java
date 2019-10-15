package com.wego.web.serviceimpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


import com.wego.web.domains.AdminDTO;

import com.wego.web.mappers.AdminMapper;
import com.wego.web.services.AdminService;
@Service
public class AdminServiceImpl implements AdminService{
@Autowired AdminMapper adminmapper;

	@Override
	public void join(AdminDTO param) {
		System.out.println("서비스 조인!!!!"+param.toString());
		
		
	}

	@Override
	public int findTheNumberOfAdmins() {
		// TODO Auto-generated method stub
		System.out.println("서비스임플"+adminmapper.countAdmins());
		return adminmapper.countAdmins();
	}


}
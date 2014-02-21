<?php

$aliases['dev'] = array(
	'uri'=> 'trailcross.ccistaging.com',
	'root' => '/home/staging/subdomains/trailcross/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=> '-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'trailcross.ca',
	'root' => '/home/trailcross/public_html',
	'remote-host'=> '192.186.194.133',
	'remote-user'=> 'trailcross',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	)
);


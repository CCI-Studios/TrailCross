<?php
function trailcross_preprocess_page(&$variables)
{
	if (isset($variables['node']) && $variables['node']->type == 'race')
		$variables['title'] = 'Races';

	if (isset($variables['node']) && $variables['node']->type == 'video')
		$variables['title'] = 'Footage';
}

?>
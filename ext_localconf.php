<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

	// Mark the delivered TypoScript templates as "content rendering template" (providing the hooks of "static template 43" = content (default))
$GLOBALS['TYPO3_CONF_VARS']['FE']['contentRenderingTemplates'][] = 't3onepage/Configuration/TypoScript/';
<?php
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Resources/Private/TypoScript/', 't3onepage');

	// Add page TSConfig
ExtensionManagementUtility::addPageTSConfig(
	'<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/Page/config.ts">'
);

	// Add user TSConfig
ExtensionManagementUtility::addUserTSConfig(
	'<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/User/config.ts">'
);

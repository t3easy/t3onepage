<?php

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

$configuration = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
	$_EXTKEY, 'Resources/Private/TypoScript/', 't3onepage'
);

	// Add page TSConfig
if ($configuration['addPageTSConfig'] == TRUE) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
		'<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/Page/config.ts">'
	);
}

	// Add user TSConfig
if ($configuration['addUserTSConfig'] == TRUE) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
		'<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/User/config.ts">'
	);
}

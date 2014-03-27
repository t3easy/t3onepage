<?php

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

$configuration = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
	$_EXTKEY, 'Configuration/TypoScript/', 't3onepage'
);


/**
 * Add page TSConfig
 */
if ($configuration['addPageTSConfig'] == TRUE) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
		'<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/TSconfig/Page.txt">'
	);
}


/**
 * Add user TSConfig
 */
if ($configuration['addUserTSConfig'] == TRUE) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
		'<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/TSconfig/User.txt">'
	);
}

$newPageColumns = array(
	'css_id' => array(
		'exclude' => 0,
		'label' => 'LLL:EXT:t3onepage/Resources/Private/Language/locallang_db.xlf:pages.css_id',
		'config' => array(
			'type' => 'input',
			'size' => 30,
			'eval' => 'trim, unique, alphanum_x'
		),
	),
	'css_class' => array(
		'exclude' => 0,
		'label' => 'LLL:EXT:t3onepage/Resources/Private/Language/locallang_db.xlf:pages.css_class',
		'config' => array(
			'type' => 'select',
			'items' => array(
				array('LLL:EXT:t3onepage/Resources/Private/Language/locallang_db.xlf:pages.css_class.none', ''),
				array('LLL:EXT:t3onepage/Resources/Private/Language/locallang_db.xlf:pages.css_class.dark-section', 'dark-section'),
				array('LLL:EXT:t3onepage/Resources/Private/Language/locallang_db.xlf:pages.css_class.highlight-section', 'highlight-section'),
				array('LLL:EXT:t3onepage/Resources/Private/Language/locallang_db.xlf:pages.css_class.feature-section', 'feature-section'),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => ''
		),
	),
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $newPageColumns);

$TCA['pages']['palettes']['t3onepage'] = array(
	'canNotCollapse' => 1,
	'showitem' => 'css_id, css_class'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
	'pages',
	'--palette--;LLL:EXT:t3onepage/Resources/Private/Language/locallang_db.xlf:pages.palettes.t3onepage;t3onepage,',
	'',
	'after:layout'
);

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="https://www.facebook.com/2008/fbml" <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width = device-width, initial-scale = 1.0, minimum-scale = 1.0" />
	<title><?php
		wp_title( '|', true, 'right' );
		$site_description = get_bloginfo( 'description', 'display' );
                $site_title = get_bloginfo( 'name' ); 
                if ( is_front_page() ) {	
	        echo "$site_title | $site_description";
			}
                else {
                echo "$site_description";
				}
	?></title>
        <link rel="apple-touch-icon" href="http://kojiyamauchi.com/images/favicons/allTheSmallThingsLogoWebClip.png" />
        <link rel="shortcut icon" href="http://kojiyamauchi.com/images/favicons/favicon.ico"/>
        <link rel="icon" type="image/png" href="http://kojiyamauchi.com/images/favicons/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="http://kojiyamauchi.com/images/favicons/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="http://kojiyamauchi.com/images/favicons/favicon-16x16.png" sizes="16x16">
        <link rel="mask-icon" href="http://kojiyamauchi.com/images/favicons/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="http://kojiyamauchi.com/images/favicons/mstile-144x144.png">
        <meta name="theme-color" content="#dbdbdb">
	<?php if(get_ds_option('custom_favicon')) { ?>
	<link rel="shortcut icon" href="<?php echo get_ds_option('custom_favicon'); ?>" />
	<?php } ?>
	<?php // Facebook stuff ?>
	<?php if(get_ds_option('fb_admin_id')) { ?>
	<meta property="fb:admins" content="<?php echo get_ds_option('fb_admin_id'); ?>" />
	<?php } ?>
	<?php if (is_single()) { ?>
	<meta property="og:url" content="<?php the_permalink() ?>"/>
	<meta property="og:title" content="<?php single_post_title(''); ?>" />
	<meta property="og:description" content="<?php echo strip_tags(get_the_excerpt()); ?>" />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="<?php if (function_exists('ds_get_og_image')) { echo ds_get_og_image(); }?>" />
	<?php } else { ?>
	<meta property="og:site_name" content="<?php bloginfo('name'); ?>" />
	<meta property="og:description" content="<?php bloginfo('description'); ?>" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="<?php echo get_ds_option('main_logo'); ?>" /> <?php } ?>
	<?php
	$ds_gcode = get_ds_option('google_fonts_code');
	if($ds_gcode) {
		echo $ds_gcode;
	}
	?>

	<!--[if lt IE 9]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

<?php wp_head(); ?>

        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="http://kojiyamauchi.com/css/animate.css"/>
        <link rel="stylesheet" type="text/css" href="http://kojiyamauchi.com/css/main.css">
        <script type="text/javascript" src="http://kojiyamauchi.com/js/jquery-ui.min.js"></script>
        <script type="text/javascript" src="http://kojiyamauchi.com/js/jquery.lettering.js"></script>
        <script type="text/javascript" src="http://kojiyamauchi.com/js/jquery.textillate.js"></script>
        <script type="text/javascript" src="http://kojiyamauchi.com/js/googleAnalytics.js"></script>
        <script type="text/javascript" src="http://kojiyamauchi.com/js/jquery.fademover.js"></script>
        <script type="text/javascript" src="http://kojiyamauchi.com/js/jquery.transform2d.js"></script>
        <script type="text/javascript" src="http://kojiyamauchi.com/js/allTheSmallThingsMain.js"></script>

	<style type="text/css">
	<?php
	if(get_ds_option('justify_content')==1){
	?>
		.entry-content {
			text-align: justify;
		}
	<?php
	}

	if(get_ds_option('menu_indented')==1){
	?>
		.menu .sub-menu {
			margin-left: 12px;
		}
	<?php
	}
	?>

	</style>
</head>
<body <?php body_class(); ?> style="">
<div id="main-wrap">
<div id="page" class="hfeed site">
	<?php global $data; ?>
	<header class="main-header">
		<section class="top-logo-group">
			<h1 class="logo">
				<a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<?php
					$logo = get_ds_option( 'main_logo' );
					if( $logo ) {
						echo '<img alt="' . __( 'home', 'dsframework' ) . '" src="' . $logo . '" />';
					} else {
						echo get_bloginfo( 'name' );
					}
					?>
				</a>
			</h1>
			<div class="site-description"><?php bloginfo( 'description' ); ?></div>
		</section>
		<div class="menus-container">
			<span class="menu-sep">&mdash;</span>
			<nav id="main-menu" class="menu">
			<?php
			if ( has_nav_menu( 'primary' ) ) {
				echo wp_nav_menu( array(
					'theme_location' => 'primary',
					'container'      => false,
					'container_class' => 'menu-header',
					'menu_class' => 'primary-menu',
					'echo' => false
				));
			} else {
			?>
				<p><?php _e('Primary menu is not selected and/or created. Please go to "Appearance &rarr; Menus" and setup menu.' ,'dsframework'); ?></p>
			<?php } ?>
			</nav>
			<span class="menu-sep">&mdash;</span>
			<?php if ( has_nav_menu( 'social' ) ) { ?>
				<nav class="social-menu menu">
					<?php
					echo wp_nav_menu( array(
						'theme_location' => 'social',
						'container'      => false,
						'container_class' => '',
						'menu_class' => false
					));
					?>
				</nav>
			<?php }	?>
		</div>
	</header>
	<div id="main">
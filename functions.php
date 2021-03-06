<?php
/**
 * Beyond functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Beyond
 */

if ( ! function_exists( 'beyond_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function beyond_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Beyond, use a find and replace
		 * to change 'beyond' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'beyond', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		// add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'beyond' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			// 'comment-form',
			// 'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		// add_theme_support( 'custom-background', apply_filters( 'beyond_custom_background_args', array(
		// 	'default-color' => 'ffffff',
		// 	'default-image' => '',
		// ) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'beyond_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function beyond_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'beyond_content_width', 640 );
}
add_action( 'after_setup_theme', 'beyond_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function beyond_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'beyond' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'beyond' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'beyond_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function beyond_scripts() {
	wp_enqueue_style( 'beyond-style', get_stylesheet_uri(), array(), '201801', 'all' );

  wp_enqueue_style('beyond-google-fonts', "https://fonts.googleapis.com/css?family=Quantico:400,700", false );

	wp_enqueue_script( 'beyond-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'beyond-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

  wp_enqueue_script( 'beyond-scriptbundle', get_template_directory_uri() . '/js/script.js', array(), '20151220', true );
}
add_action( 'wp_enqueue_scripts', 'beyond_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

// Enque css file for the login page
function my_custom_login() {
  echo '<link rel="stylesheet" type="text/css" href="' . get_bloginfo('stylesheet_directory') . '/login.css" />';
  }
  add_action('login_head', 'my_custom_login');
  
  // Adds link to home page when the user clicks on logo on login page
  function my_login_logo_url() {
      return home_url();
  }
  add_filter( 'login_headerurl', 'my_login_logo_url' );

  function my_login_logo_url_title() {
      return 'Beyond Curtin Digital Grad Show 2018';
  }
  add_filter( 'login_headertitle', 'my_login_logo_url_title' );



// Remove menu items from admin
function admin_menu_remove (){
  remove_menu_page('edit.php');
  remove_menu_page( 'edit-comments.php' );
  remove_menu_page( 'tools.php' );
}

add_action('admin_menu', 'admin_menu_remove');//adding action for triggering function call




// Require custom post types
require get_template_directory() . '/inc/graduate-profile-post-type.php';

// Require custom skills taxonomy
require get_template_directory() . '/inc/skills-taxonomy.php';


// Sort the get next and prev posts liks alphabetiocally
 function filter_next_post_sort($sort) {
    if (get_post_type($post) == 'graduate-profile') {
        $sort = "ORDER BY p.post_title ASC LIMIT 1";
    }
    else{
        $sort = "ORDER BY p.post_date ASC LIMIT 1";
    }
    return $sort;
}
function filter_next_post_where($where) {
    global $post, $wpdb;
    if (get_post_type($post) == 'graduate-profile') {
        return $wpdb->prepare("WHERE p.post_title > '%s' AND p.post_type = '". get_post_type($post)."' AND p.post_status = 'publish'",$post->post_title);
    }
    else{
        return $wpdb->prepare( "WHERE p.post_date > '%s' AND p.post_type = '". get_post_type($post)."' AND p.post_status = 'publish'", $post->post_date, $post->post_type );
    }
}
function filter_previous_post_sort($sort) {
    if (get_post_type($post) == 'graduate-profile') {
        $sort = "ORDER BY p.post_title DESC LIMIT 1";
    }
    else{
        $sort = "ORDER BY p.post_date DESC LIMIT 1";
    }
    return $sort;
}
function filter_previous_post_where($where) {
    global $post, $wpdb;
    if (get_post_type($post) == 'graduate-profile') {
        return $wpdb->prepare("WHERE p.post_title < '%s' AND p.post_type = '". get_post_type($post)."' AND p.post_status = 'publish'",$post->post_title);
    }
    else{
        return $wpdb->prepare( "WHERE p.post_date < '%s' AND p.post_type = '". get_post_type($post)."' AND p.post_status = 'publish'", $post->post_date, $post->post_type );
    }
}
add_filter('get_next_post_sort',   'filter_next_post_sort');
add_filter('get_next_post_where',  'filter_next_post_where');
add_filter('get_previous_post_sort',  'filter_previous_post_sort');
add_filter('get_previous_post_where', 'filter_previous_post_where');
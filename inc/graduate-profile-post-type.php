<?php

// Register Custom Post Type
function graduate_profile() {

	$labels = array(
		'name'                  => _x( 'Graduate Profiles', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Graduate Profile', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Graduate Profiles', 'text_domain' ),
		'name_admin_bar'        => __( 'Graduate Profile', 'text_domain' ),
		'archives'              => __( 'Graduate Profile Archives', 'text_domain' ),
		'attributes'            => __( 'Graduate Profile Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Graduate Profile:', 'text_domain' ),
		'all_items'             => __( 'Graduate Profiles', 'text_domain' ),
		'add_new_item'          => __( 'Add New Profile', 'text_domain' ),
		'add_new'               => __( 'Add New', 'text_domain' ),
		'new_item'              => __( 'New Graduate Profile', 'text_domain' ),
		'edit_item'             => __( 'Edit Graduate Profile', 'text_domain' ),
		'update_item'           => __( 'Update Graduate Profile', 'text_domain' ),
		'view_item'             => __( 'View Graduate Profile', 'text_domain' ),
		'view_items'            => __( 'View Graduate Profiles', 'text_domain' ),
		'search_items'          => __( 'Search Graduate Profile', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Graduate Portrait', 'text_domain' ),
		'set_featured_image'    => __( 'Set Graduate Portrait', 'text_domain' ),
		'remove_featured_image' => __( 'Remove Graduate Portrait', 'text_domain' ),
		'use_featured_image'    => __( 'Use as Graduate Portrait', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into Graduate Profile', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Graduate Profile', 'text_domain' ),
		'items_list'            => __( 'Graduate Profiles list', 'text_domain' ),
		'items_list_navigation' => __( 'Graduate Profiles list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter Graduate Profile list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Graduate Profile', 'text_domain' ),
		'description'           => __( 'Graduate Profile', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'thumbnail', 'revisions', 'custom-fields' ),
		'taxonomies'            => array( 'your_skills' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-welcome-learn-more',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'post',
	);
	register_post_type( 'graduate-profile', $args );

}
add_action( 'init', 'graduate_profile', 0 );

?>
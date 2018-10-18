<?php
/**
 * The template for displaying the single graduate-profile posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Beyond
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			// get_template_part( 'template-parts/content', get_post_type() );
      ?>
      <div class="graduate-profile-top-section">
        <div class="profile-title-wrap">
          <h1 class="graduate-name"><?php the_field('your_name'); ?></h1>
          <?php 
          $terms = get_field('skills_list');
          if( $terms ): ?>
            <ul class="skills-list">
            <?php foreach( $terms as $term ): ?>
              <li class="skills-list-item"><?php echo $term->name; ?></li>
            <?php endforeach; ?>
            </ul>
          <?php
          endif;
          ?>
        </div>
      </div>

      <div class="graduate-profile-bottom-section">
        <div class="profile-img-wrap">
          <?php 
          $image = get_field('profile_picture');
          if( !empty($image) ): ?>
            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
          <?php
          endif;
          ?>
        </div>
        <div class="graduate-profile-bio-wrap">
          <p><?php the_field('your_bio') ?></p>
          <a class="portfolio-link" href="<?php the_field('your_portfolio_website') ?>">Portfolio</a>
        </div>
      </div>

      <div class="featured-projects-wrap">
        <?php
        if( have_rows('featured_project') ):
          // loop through the rows of data
          while ( have_rows('featured_project') ) : the_row();
            $image = get_sub_field('project_preview');
		        $project_name = get_sub_field('project_name');

            ?>
            <div class="project-preview-wrap">
              <img src="<?php echo $image[url] ?>" alt="<?php echo $image[alt] ?>" />
              <h3><?php echo $project_name ?></h3>
            </div>


            <?php

          endwhile;
        else :
            ?>
            <p>No featured projects found</p>
            <?php
        endif;
        ?>
      </div>

      <?php

			the_post_navigation();

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();

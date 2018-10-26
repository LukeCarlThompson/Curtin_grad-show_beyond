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
        <div class="folded-corner"></div>
        <div class="profile-img-wrap">
          <?php 
          $image = get_field('profile_picture');
          if( !empty($image) ): ?>
            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
          <?php
          endif;
          ?>
        </div>
        <div class="profile-top-right-wrap">
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
          <p><?php the_field('your_bio') ?></p>
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
              <h3 class="project-preview-title"><?php echo $project_name ?></h3>
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
      <div class="view-profile-link-wrap">
        <a class="portfolio-link" href="<?php the_field('your_portfolio_website') ?>">Portfolio</a>
      </div>

      <div class="post-nav">
      <?php
        //Get Previous Post Thumbnail and link
        $prevPost = get_previous_post();
        if($prevPost):
          ?>
          <a class="prev-post-link" data-swup-class="prev-profile" href="<?php echo get_permalink( get_previous_post() ); ?>">
          <?php
            echo "<div class='nav-thumbnail-text'><h3>Prev</h3><span>" . get_field('your_name', $prevPost->ID) . "</span></div>";
            $navThumb = get_field('profile_picture', $prevPost->ID);
            if( !empty($navThumb) ): ?>
              <div class="nav-thumbnail-img-wrap">
                <img class="nav-thumbnail" src="<?php echo $navThumb['url']; ?>" alt="<?php echo $navThumb['alt']; ?>" />
              </div>
              <?php
            endif;
          ?>
          </a>
          <?php
        endif;


        //Get The Next Post Thumbnail and link
        $nextPost = get_next_post();
        if($nextPost):
          ?>
          <a class="next-post-link" data-swup-class="next-profile" href="<?php echo get_permalink( get_next_post() ); ?>">
          <?php
            $navThumb = get_field('profile_picture', $nextPost->ID);
            if( !empty($navThumb) ): ?>
              <div class="nav-thumbnail-img-wrap">
                <img src="<?php echo $navThumb['url']; ?>" alt="<?php echo $navThumb['alt']; ?>" />
              </div>
              <?php
            endif;
            echo "<div class='nav-thumbnail-text'><h3>Next</h3><span>" . get_field('your_name', $prevPost->ID) . "</span></div>";
          ?>
          </a>
          <?php
        endif;

      ?>
      </div>
      <?php

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();

<?php get_header(); ?>
  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <div class="stm-title-box-unit ">
        <div class="stm-page-title">
          <div class="container">
            <div class="clearfix stm-title-box-title-wrapper">
              <h3><?php the_title(); ?></h3>
            </div>
          </div>
        </div>
      </div>
      <div class="post-thumbnail">


      <?php if ( has_post_thumbnail()) :?>
        <a class="single-thumb" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
          <?php the_post_thumbnail(); // Fullsize image for the single post ?>
        </a>
      <?php endif; ?><!-- /post thumbnail -->
      </div>
      <div id="main">

      <div class="container">

        <div class="vc_row wpb_row vc_row-fluid">
          <div class="wpb_column vc_column_container vc_col-sm-8">
           <?php the_content(); ?>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-4">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_sep_color_grey vc_separator-has-text"><span class="vc_sep_holder vc_sep_holder_l"><span class="vc_sep_line"></span></span>
                  <h4>Recognised by the:</h4><span class="vc_sep_holder vc_sep_holder_r"><span class="vc_sep_line"></span></span>
                </div>
                <div class="wpb_text_column wpb_content_element ">
                  <div class="wpb_wrapper">
                    <p>
                      <a href="http://www.olympic.org/"><img class="aligncenter size-full wp-image-2878" src="img/IOC.png" alt="" srcset="http://www.ifaf.info/wp-content/uploads/2016/10/IOC.png 270w, http://www.ifaf.info/wp-content/uploads/2016/10/IOC-128x71.png 128w, http://www.ifaf.info/wp-content/uploads/2016/10/IOC-32x18.png 32w, http://www.ifaf.info/wp-content/uploads/2016/10/IOC-100x56.png 100w" sizes="(max-width: 270px) 100vw, 270px" height="150" width="270"></a>
                    </p>
                  </div>
                </div>
                <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_sep_color_grey vc_separator-has-text"><span class="vc_sep_holder vc_sep_holder_l"><span class="vc_sep_line"></span></span>
                  <h4>Members of:</h4><span class="vc_sep_holder vc_sep_holder_r"><span class="vc_sep_line"></span></span>
                </div>
                <div class="wpb_text_column wpb_content_element ">
                  <div class="wpb_wrapper">
                    <p>
                      <a href="http://www.sportaccord.com/"><img class="aligncenter size-full wp-image-2879" src="img/Sportaccord.png" alt="sportaccord" srcset="http://www.ifaf.info/wp-content/uploads/2016/10/Sportaccord.png 270w, http://www.ifaf.info/wp-content/uploads/2016/10/Sportaccord-128x71.png 128w, http://www.ifaf.info/wp-content/uploads/2016/10/Sportaccord-32x18.png 32w, http://www.ifaf.info/wp-content/uploads/2016/10/Sportaccord-100x56.png 100w" sizes="(max-width: 270px) 100vw, 270px" height="150" width="270"></a>
                      <br>
                      <a href="http://www.arisf.org/"><img class="aligncenter size-full wp-image-2875" src="img/ARISF.png" alt="arisf" srcset="http://www.ifaf.info/wp-content/uploads/2016/10/ARISF.png 270w, http://www.ifaf.info/wp-content/uploads/2016/10/ARISF-128x71.png 128w, http://www.ifaf.info/wp-content/uploads/2016/10/ARISF-32x18.png 32w, http://www.ifaf.info/wp-content/uploads/2016/10/ARISF-100x56.png 100w" sizes="(max-width: 270px) 100vw, 270px" height="150" width="270"></a>
                    </p>
                  </div>
                </div>
                <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_sep_color_grey vc_separator-has-text"><span class="vc_sep_holder vc_sep_holder_l"><span class="vc_sep_line"></span></span>
                  <h4>Signatory of:</h4><span class="vc_sep_holder vc_sep_holder_r"><span class="vc_sep_line"></span></span>
                </div>
                <div class="wpb_text_column wpb_content_element ">
                  <div class="wpb_wrapper">
                    <p>
                      <a href="https://www.wada-ama.org/"><img class="aligncenter size-full wp-image-2880" src="img/WADA.png" alt="wada" srcset="http://www.ifaf.info/wp-content/uploads/2016/10/WADA.png 270w, http://www.ifaf.info/wp-content/uploads/2016/10/WADA-128x71.png 128w, http://www.ifaf.info/wp-content/uploads/2016/10/WADA-32x18.png 32w, http://www.ifaf.info/wp-content/uploads/2016/10/WADA-100x56.png 100w" sizes="(max-width: 270px) 100vw, 270px" height="150" width="270"></a>
                    </p>
                  </div>
                </div>
                <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_sep_color_grey vc_separator-has-text"><span class="vc_sep_holder vc_sep_holder_l"><span class="vc_sep_line"></span></span>
                  <h4>Partners with:</h4><span class="vc_sep_holder vc_sep_holder_r"><span class="vc_sep_line"></span></span>
                </div>
                <div class="wpb_text_column wpb_content_element ">
                  <div class="wpb_wrapper">
                    <p>
                      <a href="https://www.sportaccord.com/doping-free-sport/"><img class="aligncenter size-full wp-image-2876" src="img/DSFU.png" alt="dsfu" srcset="http://www.ifaf.info/wp-content/uploads/2016/10/DSFU.png 270w, http://www.ifaf.info/wp-content/uploads/2016/10/DSFU-128x71.png 128w, http://www.ifaf.info/wp-content/uploads/2016/10/DSFU-32x18.png 32w, http://www.ifaf.info/wp-content/uploads/2016/10/DSFU-100x56.png 100w" sizes="(max-width: 270px) 100vw, 270px" height="150" width="270"></a>
                      <br>
                      <a href="http://www.fisu.net/"><img class="aligncenter size-full wp-image-2877" src="img/FISU.png" alt="fisu" srcset="http://www.ifaf.info/wp-content/uploads/2016/10/FISU.png 270w, http://www.ifaf.info/wp-content/uploads/2016/10/FISU-128x71.png 128w, http://www.ifaf.info/wp-content/uploads/2016/10/FISU-32x18.png 32w, http://www.ifaf.info/wp-content/uploads/2016/10/FISU-100x56.png 100w" sizes="(max-width: 270px) 100vw, 270px" height="150" width="270"></a>
                      <a href="http://www.theworldgames.org/"><img class="aligncenter size-full wp-image-2881" src="img/World-Games.png" alt="world-games" srcset="http://www.ifaf.info/wp-content/uploads/2016/10/World-Games.png 270w, http://www.ifaf.info/wp-content/uploads/2016/10/World-Games-128x71.png 128w, http://www.ifaf.info/wp-content/uploads/2016/10/World-Games-32x18.png 32w, http://www.ifaf.info/wp-content/uploads/2016/10/World-Games-100x56.png 100w" sizes="(max-width: 270px) 100vw, 270px" height="150" width="270"></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix">
        </div>
      </div>
    </div>
    <!--main-->
  </div>
  <!--wrapper-->
    </article>
  <?php endwhile; else: // If 404 page error ?>
    <article>

      <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>

    </article>
  <?php endif; ?>

<?php get_footer(); ?>

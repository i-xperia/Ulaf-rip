<?php get_header(); ?>


<div id="main">
      <div class="stm-default-page stm-default-page-grid stm-default-page-left">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-md-push-3 col-sm-12">
              <div class="sidebar-margin-top clearfix"></div>
              <div class="stm-small-title-box">
                <div class="stm-title-box-unit ">
                  <div class="stm-page-title">
                    <div class="container">
                      <div class="clearfix stm-title-box-title-wrapper">
                        <h3><?php the_category(', '); ?></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">


              <?php get_template_part('loop'); ?>

              </div>
              <ul class="page-numbers">
                <li><span class="page-numbers current">1</span></li>
                <li><a class="page-numbers" href="http://www.ifaf.info/news/page/2/">2</a></li>
                <li><a class="page-numbers" href="http://www.ifaf.info/news/page/3/">3</a></li>
                <li><span class="page-numbers dots">…</span></li>
                <li><a class="page-numbers" href="http://www.ifaf.info/news/page/7/">7</a></li>
                <li><a class="next page-numbers" href="http://www.ifaf.info/news/page/2/"><i class="fa fa-angle-right"></i></a></li>
              </ul>
            </div>
            <!--Sidebar-->

          </div>
        </div>
      </div>
    </div>
    <!--main-->
    </div>
<?php get_footer(); ?>





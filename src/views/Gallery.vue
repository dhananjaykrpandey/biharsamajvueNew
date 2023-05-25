<template>
    <div class="Gallery">
        <div class="breadcrumbs">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <h2>Gallery Album</h2>
                    <ol>
                        <li><router-link to="/">Home</router-link></li>
                        <li>Gallery Album</li>
                        <li>Gallery</li>
                    </ol>
                </div>

            </div>
        </div><!-- End Breadcrumbs -->
        <!-- ======= Portfolio Section ======= -->
        <section id="portfolio" class="portfolio" data-aos="fade-up">
            <div class="container">

                <div class="section-header">
                    <h2>Gallery</h2>
                    <p>A work of art when placed in a gallery loses its charge, and becomes a portable object or surface
                        disengaged from the outside world.</p>
                </div>

            </div>

            <div class="container-fluid" data-aos="fade-up" data-aos-delay="200">

            
                        <ul>


                            <li style="float: left; margin: 5px;"  v-for="vImage in posts" :key="vImage.Id">

                                <a v-bind:href="vImage.url" v-bind:title="vImage.description"
                                    class="glightbox">

                                    <img :src="vImage.url" class="img-fluid" v-bind:alt="vImage.description"
                                    v-bind:title="vImage.description" style="width: 300px; height:300px;" />

                                </a>


                            </li>



                          
                        </ul>
                        <!-- <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item" v-for="vImage in posts" :key="vImage.Id">
                                <img :src="vImage.url" class="img-fluid" v-bind:alt="vImage.description"
                                    v-bind:title="vImage.description" style="width: 300px; height:300px;">
                                <div class="portfolio-info">
                                    <h4>{{ vImage.title }}</h4>
                                    <a v-bind:href="vImage.url" v-bind:title="vImage.description"
                                        data-gallery="portfolio-gallery" class="glightbox preview-link"><i
                                            class="bi bi-zoom-in"></i></a>

                                    <router-link to="/Gallery" title="More Details" class="details-link"><i
                                            class="bi bi-link-45deg"></i></router-link>
                                </div>
                            </div> -->

                    </div><!-- End Portfolio Container -->

              
         



        </section>


        <!-- End Inner Page  name: "GalleryAlbum",-->
    </div>
</template>
<script>
import "glightbox/dist/css/glightbox.css";
import "glightbox/dist/js/glightbox.js";
import GLightbox from 'glightbox';
import axios from 'axios';
export default {
    data() {
        return {
            posts: [],
        };
    },
    mounted() {
        //lightbox settings
        this.lightbox = GLightbox({
            selector: ".glightbox"
        });
        try {
            //const response =
            axios.get("http://localhost:5072/api/GalleryAlbum/JsonGetImageAlbum").then(response => { this.posts = response.data });
            // JSON responses are automatically parsed.
            // this.posts =response.data.results;
            console.log(this.posts);
            //console.log(response.status);
            //console.log(response.headers);
        } catch (error) {
            console.log(error);
        }

    }
}
</script>
<style scoped>.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
}</style>
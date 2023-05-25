<template>
  <div class="GalleryAlbum">
    <div class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Gallery Album</h2>
          <ol>
            <li><router-link to="/">Home</router-link></li>
            <li>Gallery Album</li>
          </ol>
        </div>
      </div>
    </div>
    <!-- End Breadcrumbs -->
    <!-- ======= Services Section ======= -->
    <section class="inner-page">
      <div class="container" data-aos="fade-up">
        <div class="col-lg-12">
          <section id="" class="services">
            <div class="container" data-aos="fade-up">
              <div class="row gy-5">
                <div
                  class="col-xl-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  v-for="vImage in posts"
                  :key="vImage.Id"
                >
                  <div class="service-item">
                    <div class="img">
                      <img
                        :src="vImage.url"
                        class="img-fluid"
                        v-bind:alt="vImage.description"
                        v-bind:title="vImage.description"
                        style="width: 1024px; height: 300px"
                      />
                    </div>
                    <div class="details position-relative">
                      <router-link
                        :to="{ name: 'Gallery', params: { Title: vImage.title } }"
                        class="stretched-link"
                      >
                        <h3>{{ vImage.title }}</h3>
                      </router-link>
                      <p>{{ vImage.description }}</p>
                    </div>
                  </div>
                </div>
                <!-- Delay = Delay + 100; -->
              </div>
            </div>
          </section>

          <!-- End Services Section -->
        </div>
      </div>
    </section>

    <!-- End Inner Page  name: "GalleryAlbum",-->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HomePage",
  //el: '#ImageLists',
  data() {
    return {
      posts: [],
    };
  },

  mounted() {
    try {
      //const response =https://localhost:7104/api/ http://localhost:5072/api/
      axios
        .get("https://localhost:7104/api/GalleryAlbum/JsonGetImageAlbum")
        .then((response) => {
          this.posts = response.data;
        });
      // JSON responses are automatically parsed.
      // this.posts =response.data.results;
      console.log(this.posts);
      //console.log(response.status);
      //console.log(response.headers);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

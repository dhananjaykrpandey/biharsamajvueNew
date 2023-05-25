<template>
  <div class="Gallery">
    <br /><br />
    <div class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Gallery Album</h2>
          <ol>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/GalleryAlbum">Gallery Album</router-link></li>
            <li>Gallery</li>
          </ol>
        </div>
      </div>
    </div>
    <!-- End Breadcrumbs -->
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio" data-aos="fade-up">
      <div class="container">
        <div class="section-header">
          <h2>Gallery</h2>
          <p>
            A work of art when placed in a gallery loses its charge, and becomes a
            portable object or surface disengaged from the outside world.
          </p>
        </div>
      </div>

      <div class="container-fluid" data-aos="fade-up" data-aos-delay="200">
        <ul>
          <li style="float: left; margin: 5px">
            <a
              href="https://scontent.ffjr1-3.fna.fbcdn.net/v/t39.30808-6/342183373_238896911981000_2885239457315152548_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2zvNA52EmcEAX82nBGo&_nc_ht=scontent.ffjr1-3.fna&oh=00_AfBfUKJEadO3lNegqg_u2moKYw7Ui0hE_Dneh8RSyC4Faw&oe=6474B3DB"
              class="glightbox"
            >
              <img
                src="https://scontent.ffjr1-3.fna.fbcdn.net/v/t39.30808-6/342183373_238896911981000_2885239457315152548_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2zvNA52EmcEAX82nBGo&_nc_ht=scontent.ffjr1-3.fna&oh=00_AfBfUKJEadO3lNegqg_u2moKYw7Ui0hE_Dneh8RSyC4Faw&oe=6474B3DB"
                class="img-fluid"
                style="width: 300px; height: 300px"
              />
            </a>
          </li>

          <li style="float: left; margin: 5px">
            <a
              href="https://scontent.ffjr1-3.fna.fbcdn.net/v/t39.30808-6/342183373_238896911981000_2885239457315152548_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2zvNA52EmcEAX82nBGo&_nc_ht=scontent.ffjr1-3.fna&oh=00_AfBfUKJEadO3lNegqg_u2moKYw7Ui0hE_Dneh8RSyC4Faw&oe=6474B3DB"
              class="glightbox"
            >
              <img
                src="https://scontent.ffjr1-3.fna.fbcdn.net/v/t39.30808-6/342183373_238896911981000_2885239457315152548_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2zvNA52EmcEAX82nBGo&_nc_ht=scontent.ffjr1-3.fna&oh=00_AfBfUKJEadO3lNegqg_u2moKYw7Ui0hE_Dneh8RSyC4Faw&oe=6474B3DB"
                class="img-fluid"
                style="width: 300px; height: 300px"
              />
            </a>
          </li>
        </ul>
      </div>
      <!-- End Portfolio Container -->
    </section>

    <!-- End Inner Page  name: "GalleryAlbum",-->
  </div>
</template>
<script>
import "glightbox/dist/css/glightbox.css";
import "glightbox/dist/js/glightbox.js";
import GLightbox from "glightbox";
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    //lightbox settings
    this.lightbox = GLightbox({
      selector: ".glightbox",
    });
    try {
      //const response =
      console.log(this.$route.params.Title);
      const vars = this.$route.params.Title;
      const urls = "https://localhost:7104/api/GalleryAlbum/JosnGetGalleryImage/" + vars;
      console.log(urls);
      axios.get(urls).then((response) => {
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
<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>

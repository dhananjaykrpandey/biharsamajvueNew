<template>
  <div class="EventDetails">
    <div class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Event Booking</h2>
          <ol>
            <li><router-link to="/">Home</router-link></li>
            <li>Event Booking</li>
          </ol>
        </div>
      </div>
    </div>
    <!-- End Breadcrumbs -->
    <!-- ======= Services Section ======= -->
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">
        <div class="row g-5">
          <div class="col-lg-12">
            <div class="blog-details">
              <h2 class="title">{{ EventDetails.title  }}</h2>
              <p class="fst-italic small">{{ EventDetails.description  }}</p>
              <div class="meta-top">
                <ul>
                  <li class="d-flex align-items-center"><i class="bi bi-building-fill"></i> <a href="#">{{ EventDetails.eventVenue  }}</a></li>
                  <li class="d-flex align-items-center"><i class="bi bi-calendar"></i> <a href="#"><time
                        datetime="2020-01-01"><date-format :date=EventDetails.eventDate /></time></a></li>
                  <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="#">{{ EventDetails.eventTimeString  }}</a></li>
                </ul>
              </div><!-- End meta top -->
              <div class="comments">
                <div class="reply-form">
                  <form v-on:submit.prevent="submitForm">
                    <!-- id="quickForm" method="post"  -->
                    <input  class="form-control" name="id" id="id"  hidden  v-model="form.eventId" />
                        
                    <div class="row">
                      <div class="form-group" hidden>
                                                <input  class="form-control"  />
                                                <!-- asp-items="ViewBag.EventId" -->
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">

                        <input  class="form-control" name="name" id="name" placeholder="Name *"  v-model="form.name" />
                        
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 form-group">

                        <input  class="form-control" name="phoneNumber" id="phoneNumber"
                          placeholder="Phone Number *" type="tel" v-model="form.phoneNumber"/>
                    
                      </div>
                      <div class="col-md-6 form-group">

                        <input class="form-control" name="email" id="email"
                          placeholder="Email Address *" type="email" v-model="form.email"/>
                       
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4 form-group">

                        <input  class="form-control" name="noOfSeat" id="noOfSeat"
                          placeholder="No Of Seat *" v-model="form.noOfSeat"/>
                       
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">

                        <textarea  name="remarks"  id="remarks" class="form-control"
                          placeholder="Comment/Remarks *" v-model="form.remarks"></textarea>
                      
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                      <div class="col-md-6">
                        <button type="reset" class="btn btn-danger">Reset</button>
                      </div>
                    </div>


                  </form>

                </div>

              </div>
            </div><!-- End blog post -->


          </div>


        </div>

      </div>
    </section><!-- End Blog Details Section -->
    <!-- @section Scripts
    {
    <script>

        $('#quickForm').validate({
            rules: {
                Name: {
                    required: true,
                    maxlength: 50
                },
                PhoneNumber: {
                    required: true,
                    maxlength: 20
                },
                Email: {
                    required: true
                },
                NoOfSeat: {
                    required: true
                },
                Remarks: {
                    maxlength: 500
                },
            },
            messages: {
                Name: {
                    required: "Please enter a name.",
                    maxlenght: "Your description max length = 50"
                },
                PhoneNumber: {
                    required: "Please provide a phone number",
                    maxlenght: "Your description max length = 20"
                },
                Email: { required: "Please provide a email id." },
                NoOfSeat: { required: "Please provide no of seat." },
                Remarks: { maxlenght: "Your description max length = 500" },
            },
            errorElement: 'span',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                element.closest('.form-group').append(error);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).addClass('is-invalid');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass('is-invalid');
            }
        });

    </script>
} -->


    <!-- End Inner Page -->
  </div>
</template>
<script>
import axios from "axios";
import swal from 'sweetalert2';
import { resolveDirective } from "vue";
export default {
  data() {
    return {
      EventDetails: [],
      form: {
                name: '',
                email: '',
                noOfSeat: '',
                remarks: '',
                phoneNumber: '',
                eventId:this.$route.params.Id,
                
            }
    };
  },
 methods: {
  
  submitForm()
      {
        var apihostname = this.$apihostname;
            axios.post(apihostname.concat('/api/EventBooking'), this.form)
                 .then((res) => {
                     //Perform Success Action
                     var bookingid = res.data.id;
                     console.log(res.data);
                     console.log(bookingid);
                     swal.fire('Your booking save successfully!! \n You will recivie booking confirmation and invition of your booking \n\n\ your booking reference number \n\n  ' + bookingid);
                                      })
                 .catch((error) => {
                     // error.response.status Check status code
                     swal.fire(error);
                 }).finally(() => {
                     //Perform action in always
                     router.push({ path: '/home', replace: true })
                 });
  }}, 
  mounted() {
   
    try {
      //const response =
      console.log(this.$route.params.id);
      const vars = this.$route.params.Id;
      var apihostname = this.$apihostname;
     
      const urls = apihostname.concat("/api/Event/") + vars;
      console.log(urls);
      axios.get(urls).then((response) => {
        this.EventDetails = response.data;
      });
      
      console.log(this.posts);
      
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

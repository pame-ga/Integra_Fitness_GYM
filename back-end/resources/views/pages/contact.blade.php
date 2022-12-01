@extends('layouts.master_home')

@section('home_content')


    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Contacto</h2>
          <ol>
            <li><a href="index.html">Inicio</a></li>
            <li>Contacto</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->


    @if(session('success'))
     <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{{ session('success') }}</strong>  
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
   </div>
   @endif

    <!-- ======= Contact Section ======= -->
    <div class="map-section">
      <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5962585019515!2d-100.68366398561075!3d19.899263230749963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d2d7ea2bc51b1%3A0xb5a681da16e03555!2sIntegra%20Fitness%20Gym!5e0!3m2!1ses-419!2smx!4v1669903279449!5m2!1ses-419!2smx" frameborder="0" allowfullscreen></iframe>
    </div>

    <section id="contact" class="contact">
      <div class="container">

        <div class="row justify-content-center" data-aos="fade-up">

          <div class="col-lg-10">

            <div class="info-wrap">
              <div class="row">
                <div class="col-lg-4 info">
                  <i class="icofont-google-map"></i>
                  <h4>Lugar:</h4>
                  <p> {{ $contacts->address }}</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                  <i class="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>{{ $contacts->email }}</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                  <i class="icofont-phone"></i>
                  <h4>Telefono:</h4>
                  <p>{{ $contacts->phone }}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div class="row mt-5 justify-content-center" data-aos="fade-up">
          <div class="col-lg-10">
            <form action="{{ route('contact.form') }}" method="post" >
              @csrf
              <div class="form-row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control"   placeholder="Tu Nombre"   />
                  
                </div>
                <div class="col-md-6 form-group">
                  <input type="email" class="form-control" name="email"  placeholder="Tu correo electronico"   />
                  
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto"   />
                 
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5"   placeholder="Mensaje"></textarea>
                
              </div>
     <button class="btn btn-success" type="submit">Enviar mensaje</button>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->


@endsection
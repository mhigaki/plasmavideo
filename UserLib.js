$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp3 = new PgComponentType('comp3', 'Top-Bar / Contact Details');
        comp_comp3.code = '<ul class="contact-details" data-pg-collapsed>\
 <li>\
  <a href="mailto:contato@plasmavideo.net.br?&cc=&bcc=&subject=Website :: Formulário&body=A Plasmavideo é uma empresa  de venda e instalação de equipamentos Eletrônicos de Segurança. Oferecemos a segurança necessária para sua família ou seu negócio, proporcionamos os mais modernos e confiáveis sistemas de alarmes, câmeras de segurança e sensores de presença, tudo monitorado 24hs."><i class="icon-envelope"></i>contato@plasmavideo.net.br</a>\
 </li>\
 <li>\
  <a href="callto:+551136216366"><i class="icon-call-out"></i>+55 (11) 3621-6366</a>\
 </li>\
 <li>\
  <i class="icon-clock"></i> Seg-Sex\
  <span class="timing">(9hs-17hs)</span>\
 </li>\
</ul>';
        comp_comp3.parent_selector = null;
        f.addComponentType(comp_comp3);
        
        var comp_comp2 = new PgComponentType('comp2', 'Top-Bar / Social-List');
        comp_comp2.code = '<ul class="social-list">\
 <li>\
  <a href="https://www.facebook.com/sharer/sharer.php?u=https://plasmavideo.net.br" class="social-link facebook" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Facebook" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>\
 </li>\
 <li>\
  <a href="https://www.instagram.com/reinaldo.plasma/" class="social-link google" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Google Plus" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a>\
 </li>\
 <li>\
  <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://plasmavideo.net.br&title=&summary=A Plasmavideo é uma empresa  de venda e instalação de equipamentos Eletrônicos de Segurança. Oferecemos a segurança necessária para sua família ou seu negócio, proporcionamos os mais modernos e confiáveis sistemas de alarmes, câmeras de segurança e sensores de presença, tudo monitorado 24hs.&source=" class="social-link linkdin" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Linkedin" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>\
 </li>\
</ul>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        var comp_comp1 = new PgComponentType('comp1', 'Header / Page header');
        comp_comp1.code = '<div class="page-header" data-pg-collapsed>\
 <div class="container">\
  <div class="row">\
   <div class="col-md-12">\
    <h1 class="entry-title">Quem Somos</h1>\
    <div class="breadcrumb">\
     <span>Você está aqui:</span>\
     <a href="index.html">Home</a>\
     <span class="crumbs-spacer"><i class="fa fa-angle-double-right"></i></span>\
     <span class="current">Empresa</span>\
     <span class="crumbs-spacer"><i class="fa fa-angle-double-right"></i></span>\
     <span class="current">Quem Somos</span>\
    </div>\
   </div>\
  </div>\
 </div>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp3, comp_comp2, comp_comp1]);

        f.addLibSection(section);
   });
});
$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / div');
        comp_comp1.code = '<div title="" data-original-title="" class="social-link">\
  <a class="facebook" target="_blank" data-original-title="facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.facebook.com/Plasmavideo/" data-toggle="tooltip" data-placement="top" rel="noopener"><i class="fa fa-facebook"></i></a>\
  <a class="linkedin" target="_blank" data-original-title="linkedin" href="https://www.linkedin.com/in/plasmavideo/" data-toggle="tooltip" data-placement="top" rel="noopener"><i class="fa fa-linkedin"></i></a>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});
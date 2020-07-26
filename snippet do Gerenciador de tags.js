$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("snippet do Gerenciador de tags", "snippet do Gerenciador de tags");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "snippet do Gerenciador de tags";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Body / Google Tag Manager (noscript)');
        comp_comp1.code = '<noscript data-pg-collapsed>\
 <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HSTK9V" height="0" width="0" style="display:none;visibility:hidden"></iframe>\
</noscript>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Head / Google Tag Manager');
        comp_comp2.code = '<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\
new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\
j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\
\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\
})(window,document,\'script\',\'dataLayer\',\'GTM-5HSTK9V\');</script>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("snippet do Gerenciador de tags_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2]);

        f.addLibSection(section);
   });
});
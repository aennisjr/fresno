const initPopupScript = () => {

    submit_btn = document.getElementById('fr-submit-btn');

    submit_btn.addEventListener('click', function(e){
        e.preventDefault();

        
    });

};

// Fire scripts after page has loaded
document.addEventListener('DOMContentLoaded', initPopupScript);
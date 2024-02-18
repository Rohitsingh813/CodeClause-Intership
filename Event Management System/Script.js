
  // Hide preloader when the page is loaded
  window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    setTimeout(function () {
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';
    }, 1000); // Set the duration in milliseconds
    document.body.style.overflow = 'visible'; // Show overflow after preloader is hidden
  });

  $(document).ready(function(){
    $("#home-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      animateOut: 'fadeOut', // Add fadeOut animation
      animateIn: 'fadeIn',   // Add fadeIn animation
      smartSpeed: 1500,       // Set animation speed
      autoHeight: true        // Adjusts height based on content
    });
  });

 // JavaScript for Team Member Modal
$(document).ready(function () {
  $("#team-slider").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  // Attach click event listeners to team member images
  $(".item img").click(function () {
    // Get the alt attribute (Team Member ID)
    var memberId = $(this).attr("alt");

    // Get team member details based on the member ID (replace with actual data)
    var memberDetails = getMemberDetails(memberId);

    // Display team member details in the modal
    $("#teamMemberDetails").html(memberDetails);

    // Show the modal
    $("#teamMemberModal").fadeIn();
  });

  // Close the modal when the close button is clicked
  $(".close").click(function () {
    $("#teamMemberModal").fadeOut();
  });

  // Close the modal if the user clicks outside of it
  $(window).click(function (event) {
    if (event.target.id === "teamMemberModal") {
      $("#teamMemberModal").fadeOut();
    }
  });
});

// Function to get team member details based on member ID (replace with actual data)
function getMemberDetails(memberId) {
  // Example: Replace this with actual member details retrieval logic
  var memberDetails = '<h2>Jack ' + memberId + '</h2>';
  memberDetails += '<p>Role: Project Manager</p>';
  memberDetails += '<p>Email: member' + memberId + '@example.com</p>';
  return memberDetails;
}

  // ... (other JavaScript code) ...
  


  document.addEventListener('DOMContentLoaded', function () {
    // Add a scroll event listener
    window.addEventListener('scroll', function () {
      var header = document.querySelector('header');
      var nav = document.querySelector('nav');
  
      // Check if the page is scrolled down
      if (window.scrollY > 0) {
        header.classList.add('scrolled'); // Add class to header
        nav.classList.add('scrolled'); // Add class to nav
      } else {
        header.classList.remove('scrolled'); // Remove class from header
        nav.classList.remove('scrolled'); // Remove class from nav
      }
    });
  });
  
  function addEvent() {
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;

    if (eventName && eventDate) {
      const eventItem = document.createElement('li');
      eventItem.textContent = `${eventName} - ${eventDate}`;

      document.getElementById('events-list').appendChild(eventItem);
    } else {
      alert('Please enter both event name and date.');
    }
  }

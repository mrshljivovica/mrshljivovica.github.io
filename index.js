function getUsers() {
    let num_users = 9

    fetch("https://randomuser.me/api/?results="+num_users+"")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        for (let i = 0; i < num_users; i++) {
            let user = document.createElement('div');
            user.className = "user"
            user.innerHTML = '<h1>User Nr. ' +(i+1) + '</h1>'
            let u_con = document.createElement('div');
            u_con.className = "u-con"
            user.appendChild(u_con)

            let u_name_p = document.createElement('p')
            u_name_p.innerHTML = "<b><u>Name:</u> <b>"
            u_con.appendChild(u_name_p)
            let u_name_data = document.createTextNode(data.results[i].name.first +" "+ data.results[i].name.last)
            u_name_p.appendChild(u_name_data)

            let u_email_p = document.createElement('p')
            u_email_p.innerHTML = "<b><u>Email:</u> <b>"
            u_con.appendChild(u_email_p)
            let u_email_data = document.createTextNode(data.results[i].email)
            u_email_p.appendChild(u_email_data)

            let u_phone_p = document.createElement('p')
            u_phone_p.innerHTML = "<b><u>Phone Number:</u> <b>"
            u_con.appendChild(u_phone_p)
            let u_phone_data = document.createTextNode(data.results[i].cell)
            u_phone_p.appendChild(u_phone_data)

            let u_street_p = document.createElement('p')
            u_street_p.innerHTML = "<b><u>Name:</u> <b>"
            u_con.appendChild(u_street_p)
            let u_street_data = document.createTextNode(data.results[i].location.street.name)
            u_street_p.appendChild(u_street_data)

            let u_city_p = document.createElement('p')
            u_city_p.innerHTML = "<b><u>City:</u> <b>"
            u_con.appendChild(u_city_p)
            let u_city_data = document.createTextNode(data.results[i].location.city)
            u_city_p.appendChild(u_city_data)

            let u_zip_p = document.createElement('p')
            u_zip_p.innerHTML = "<b><u>Zipcodes:</u> <b>"
            u_con.appendChild(u_zip_p)
            let u_zip_data = document.createTextNode(data.results[i].location.postcode)
            u_zip_p.appendChild(u_zip_data)

            users.appendChild(user)
          }
      });
      document.body.appendChild(users)
  }

let users = document.createElement("div");
users.className = "usrs"
getUsers();

function selector(){
  u_con_array = document.querySelectorAll(".user")
  console.log(u_con_array)
      const observer  = new IntersectionObserver( entries =>{
        entries.forEach(entry =>{
          entry.target.classList.toggle('u-con-animation', entry.isIntersecting)
          if (entry.isIntersecting) observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.5,
      })
      u_con_array.forEach(item =>{
        observer.observe(item);
      })
}
setTimeout(selector, 500)

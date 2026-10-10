import React from "react";

const About = () => {
  return (
    <div className="my-34 mx-16 dark:bg-gray-900 dark:text-white">
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl px-2 font-bold border-l-8 border-primary font-serif">
          About Us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab
          facilis dicta dolores est quisquam qui doloribus necessitatibus
          molestias esse saepe sit, deserunt numquam possimus non. Repellat ab
          recusandae sint ad, et explicabo saepe. Corporis ratione debitis
          quibusdam vitae, praesentium adipisci eius veniam earum dolorum sint
          totam omnis cupiditate tenetur eveniet aliquam. Quam perferendis,
          ratione consectetur itaque at quaerat ipsam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          consectetur iste ad voluptatem repellendus illo vitae, animi
          laudantium reiciendis natus aperiam odit possimus distinctio accusamus
          at quisquam cumque doloremque suscipit porro perferendis, ipsam magni.
          At ut officia illum porro delectus.
        </p>
      </div>
      <div className="my-6">
        <h1 className="text-2xl md:text-3xl px-2 font-bold border-l-8 mb-6 border-primary font-serif">
          Location to visit
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58205.31852910069!2d89.87597083898973!3d24.24763970332932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfbe3d271b363%3A0x8a0d420f347f7c7c!2sTangail!5e0!3m2!1sen!2sbd!4v1791463776751!5m2!1sen!2sbd"
          width="100%"
          height="350"
          style={{ borderRadius: "15px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default About;

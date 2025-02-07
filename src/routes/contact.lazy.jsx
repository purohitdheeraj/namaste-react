import { createLazyFileRoute } from '@tanstack/react-router'
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import postContact from "../api/postContact";

export const Route = createLazyFileRoute('/contact')({
  component: ContactRoute,
})

function ContactRoute() {
  const [errors, setErrors] = useState({});
  const mutation = useMutation({
    mutationFn: function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      const newErrors = {};
      if (!name) newErrors.name = "Name is required";
      if (!email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setErrors({});
      return postContact(name, email, message);
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form onSubmit={mutation.mutate}>
          <input name="name" placeholder="Name" />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          <input type="email" name="email" placeholder="Email" />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          <textarea placeholder="Message" name="message"></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4" data-aos="fade-down">About Stopclock</h2>

      <div className="row justify-content-center">
        <div className="col-md-8" data-aos="fade-up">
          <p className="lead text-muted mb-4">
            Stopclock is your personal timing companion designed for workouts, studying, and task management.
            It’s built to help you stay focused, structured, and highly efficient in everything you do.
          </p>

          <h4 className="text-success mb-3">Why Stopclock?</h4>
          <p>
            In today’s fast-paced world, every second counts. Stopclock empowers you to take control of your time — whether you're aiming for a personal best at the gym, maintaining deep focus while studying, or tracking productivity goals.
          </p>

          <h4 className="text-success mb-3">Our Mission</h4>
          <p>
            To provide a simple, reliable, and motivating tool that enhances performance, discipline, and time management for users across all walks of life.
          </p>

          <h4 className="text-success mb-3">Key Features</h4>
          <ul>
            <li>High-precision stopwatch for workouts and intervals</li>
            <li>Timer support for study sessions and task tracking</li>
            <li>Simple, user-friendly, and responsive design</li>
            <li>Fully focused on enhancing your efficiency and performance</li>
          </ul>

          <h4 className="text-success mb-3">Made with ❤️ by Mahadeva Prasad M</h4>
          <p>
            Built to inspire better focus, stronger workouts, and smarter study habits.  
            Let's make every second count!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const imageStyle = {
  width: '75%',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-5" data-aos="fade-down">
        Welcome to Stopclock
      </h2>

      {/* Section 1: Image Left, Text Right */}
      <div className="row align-items-center mb-5" data-aos="fade-right">
        <div className="col-md-6">
          <img src="../images/Stopclock.png" style={imageStyle} alt="Stopclock" />
        </div>
        <div className="col-md-6">
          <h5 className="text-success mb-3">Stopclock for Workouts</h5>
          <p>
            A stopclock in the gym isn’t just a timer — it’s your silent coach, sharpening every rep, every rest, and every second of focus.
            Whether you’re hitting high-intensity intervals or pushing for that perfect plank hold, a clear stopclock keeps your workouts structured and intentional.
            With time on your side, you don’t just train harder — you train smarter.
          </p>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="row align-items-center mb-5" data-aos="fade-left">
        <div className="col-md-6 order-md-2">
          <img src="../images/workout.jpeg" style={imageStyle} alt="Workout" />
        </div>
        <div className="col-md-6 order-md-1">
          <h5 className="text-success mb-3">Stopclock for Intensity</h5>
          <p>
            Whether you’re managing rest periods or powering through HIIT, a stopclock helps eliminate guesswork and ensures you’re maximizing every session.
            Consistency builds progress, and with precise timing, you make every minute count. Let the clock guide your peak performance.
          </p>
        </div>
      </div>

      {/* Section 3: Image Left, Text Right */}
      <div className="row align-items-center mb-5" data-aos="fade-right">
        <div className="col-md-6">
          <img src="../images/study.jpeg" style={imageStyle} alt="Study" />
        </div>
        <div className="col-md-6">
          <h5 className="text-success mb-3">Stopclock for Studying</h5>
          <p>
            A stopclock during study sessions keeps you focused and efficient. Whether using Pomodoro intervals or timing deep work, it structures your study routine for maximum retention and clarity.
            You don’t just study longer — you study smarter. Let the clock keep you on track.
          </p>
        </div>
      </div>

      {/* Section 4: Image Right, Text Left */}
      <div className="row align-items-center mb-5" data-aos="fade-left">
        <div className="col-md-6 order-md-2">
          <img src="../images/timer.webp" style={imageStyle} alt="Timer" />
        </div>
        <div className="col-md-6 order-md-1">
          <h5 className="text-success mb-3">Stopclock for Precision</h5>
          <p>
            For tasks that demand accuracy — split times, task durations, goal tracking — a stopclock offers clarity and control. It helps fine-tune your performance and manage time intentionally.
            Take charge with precision timing at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

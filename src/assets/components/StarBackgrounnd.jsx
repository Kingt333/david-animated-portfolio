import { useEffect, useState } from "react"

export const StarBackground = () => {
  const [stars, setStars] = useState([])
  const [meteors, setMeteors] = useState([])

  useEffect(() => {
    generateStars()
    generateMeteors()

    const handleResize = () => {
      generateStars()
      generateMeteors()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])


const generateStars = () => {
  const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 5000);
  const newStars = Array.from({ length: numberOfStars }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // use % for CSS positioning
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.5,
    animationDuration: Math.random() * 3 + 3,
  }));

  setStars(newStars); // correctly updates state
};



   const generateMeteors = () => {
    const numberOfMeteor = 4

    const newMeteors = []

    for (let i = 0; i < numberOfMeteor; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay : Math.random() * 5,
        animationDuration: Math.random() * 3 + 3,
      })
    }

    setMeteors(newMeteors)
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            top: star.y + "%",
            left: star.x + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 29 + "px",
            height: meteor.size * 2 + "px",
            top: meteor.y + "%",
            left: meteor.x + "%",
            animationDelay: meteor.delay ,
            animationDuration: meteor.animationDuration + "s",
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        />
      ))}
    </div>
  )
}
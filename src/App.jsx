import React from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import { profiles } from "./data";

function App() {
  return (
    <div className="min-h-screen bg-Navy-950 flex flex-col md:flex-row justify-center items-center gap-8 p-8">
      <ProfileCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => {
          console.log(profile.color);
          return (
            <ProfileContent
              key={profile.title}
              title={profile.title}
              hours={profile.hours}
              last={profile.last}
              color={profile.color}
              img={profile.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

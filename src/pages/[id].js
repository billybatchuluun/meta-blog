import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ContactUs } from "@/components/ContactUs";
import { About } from "@/components/About";
import { useRouter } from "next/router";

export default function Detail() {
  const { query } = useRouter();
  const [filteredArticles, setFilteredArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("https://dev.to/api/articles");
      const data = await response.json();
      setFilteredArticles(
        data.filter((article) => article.id === parseInt(query.id))
      );
    };
    if (query?.id) {
      fetchArticles();
    }
  }, [query?.id]);
  return (
    <main className="flex w-screen py-8 justify-center">
      {filteredArticles.map((article) => {
        return (
          <>
            <div className="flex flex-col gap-[100px] items-center">
              <Navbar />
              <div className="flex flex-col w-[800px] gap-8">
                <div className="flex flex-col gap-5">
                  <div className="text-4xl">{article.title}</div>
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-2 items-center">
                      <div>
                        <img
                          className="w-9 h-9 rounded-full"
                          src={article.user.profile_image}
                          alt="coverpicture"
                        />
                      </div>
                      <div>
                        <p className="text-base ml-3 ">{article.user.name}</p>
                      </div>
                    </div>
                    <div>
                      <p>
                        {article.readable_publish_date +
                          ", " +
                          new Date(article.published_at).getFullYear()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col gap-8">
                    <div>
                      <img
                        className="w-[800px] h-[462px] rounded-md"
                        src={article.cover_image}
                        alt="coverpicture"
                      ></img>
                    </div>
                    <div>
                      <p>
                        Traveling is an enriching experience that opens up new
                        horizons, exposes us to different cultures, and creates
                        memories that last a lifetime. However, traveling can
                        also be stressful and overwhelming, especially if you
                        don't plan and prepare adequately. In this blog article,
                        we'll explore tips and tricks for a memorable journey
                        and how to make the most of your travels. One of the
                        most rewarding aspects of traveling is immersing
                        yourself in the local culture and customs. This includes
                        trying local cuisine, attending cultural events and
                        festivals, and interacting with locals. Learning a few
                        phrases in the local language can also go a long way in
                        making connections and showing respect.
                      </p>
                    </div>
                    <div>
                      <p>
                        Before embarking on your journey, take the time to
                        research your destination. This includes understanding
                        the local culture, customs, and laws, as well as
                        identifying top attractions, restaurants, and
                        accommodations. Doing so will help you navigate your
                        destination with confidence and avoid any cultural faux
                        pas. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. In hendrerit gravida rutrum quisque
                        non tellus orci ac auctor. Mi ipsum faucibus vitae
                        aliquet nec ullamcorper sit amet. Aenean euismod
                        elementum nisi quis eleifend quam adipiscing vitae.
                        Viverra adipiscing at in tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <About />
            </div>
          </>
        );
      })}
    </main>
  );
}

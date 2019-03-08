import React from "react";
import { Carousel } from "react-responsive-carousel";


let thisUrl = 'https://www.sciencemag.org/news/2019/03/war-prediabetes-could-be-boon-pharma-it-good-medicine'
let thisUrl1 = 'http://science.sciencemag.org/content/363/6431/1032'



export default () => (
  <Carousel autoPlay>
    <div>
      <img src="https://www.sciencemag.org/sites/default/files/styles/carousel_1280x427__3_1_/public/images/rt_scitoc_mar8_R4.jpg?itok=iH5P16YU" />
      <p className="legend">
        <h1>Animal cultures matter for conservation</h1>
        <h2>Animal culture, defined as “information or behavior—shared within a community—which is acquired from conspecifics through some form of social learning”, can have important consequences for the survival and reproduction of individuals, social groups, and potentially, entire populations.</h2>
        <a target="_new" href={thisUrl1}>Link</a>
      </p>
    </div>
    <div>
      <img src="https://www.sciencemag.org/sites/default/files/styles/carousel_1280x427__3_1_/public/Bcell_16x9.jpg?itok=NVPO6hDK" />
      <p className="legend">
        <h1>Genetically engineered immune cells wipe out lupus in mice</h1>
        <h2>Lupus can be a stubborn disease to treat. Although many struck by the autoimmune condition live relatively normal lives, some suffer from kidney failure, blood clots, and other complications that can be deadly. Now, scientists have found that a novel treatment that wipes out the immune system’s B cells cures mice of the condition. Though the work is preliminary, it has excited researchers because it uses a therapy already approved for people with blood cancer.</h2>
        <a target="_new" href={thisUrl1}>Link</a>
      </p>
    </div>
    <div>
      <img src="https://www.sciencemag.org/sites/default/files/styles/carousel_1280x427__3_1_/public/images/rt_scitm_mar06_aat0852_R1.jpg?itok=C_iKWouJ" />
      <p className="legend">
        <h1>PAI-1 augments mucosal damage in colitis </h1>
        <h2>Only a fraction of patients with inflammatory bowel disease (IBD) respond to therapy. To look for pathways that could distinguish difficult-to-treat patients, Kaiko et al. examined transcriptomic datasets from cohorts of patients with IBD. </h2>
        <a target="_new" href={thisUrl1}>Link</a>
      </p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
      <p className="legend">Legend 5
      
        <a target="_new" href={thisUrl1}>Link</a>
      </p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
      <p className="legend">Legend 10</p>
    </div>
    <div>
      <img src="https://www.sciencemag.org/sites/default/files/styles/carousel_1280x427__3_1_/public/rt_scitoc_mar8_R1.jpg?itok=yU8tJsGb" />
      <p className="legend">
        <h1>The war on ‘prediabetes’ could be a boon for pharma—but is it good medicine?</h1>
        <a target="_new" href={thisUrl}>Link</a>
        <h2>The most common chronic disease after obesity, afflicting 84 million Americans and more than 1 billion people worldwide, was born as a public relations catchphrase</h2>
        <a target="_new" href={thisUrl1}>Link</a>
      </p>
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" />
      <p className="legend">
        <a target="_new" href={thisUrl1}>Link</a>
      </p>

    </div>
    <div>
      <img src="https://www.sciencemag.org/sites/default/files/styles/inline__699w__no_aspect/public/flu_16x9_0.jpg?itok=cMy9UL1_" />
      <p className="legend">
        <h1>New pill shows early promise for blocking many strains of flu</h1>
       
      
      </p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
      <p className="legend">Legend 14</p>
    </div>
  </Carousel>
);

import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {" "}
          {/**basis allows us to take the entire width if nothing else to compete */}
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Cras dictum et velit at suscipit. Sed fringilla est vel tellus
            posuere fermentum. Aliquam quam tellus, pulvinar quis ligula nec,
            fermentum consectetur nibh. Proin vulputate, nunc luctus eleifend
            interdum, ante turpis porta ante, et dignissim nisi sapien at
            turpis.
          </p>
          <p>Evo gym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Oooga booga</p>
          <p className="my-5">Oooga booga</p>
          <p>Oooga booga</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Oooga booga</p>
          <p>(123)456-9382</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import HeaderText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Nullam aliquet lobortis orci, ac placerat tortor convallis et. Etiam faucibus pretium neque, id accumsan mauris ornare quis. Curabitur metus leo, pharetra vel nisl ut, venenatis vestibulum lectus.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Vestibulum sit amet laoreet velit, et laoreet felis. Nunc porta non metus porta interdum. Vivamus ante magna, viverra eu iaculis et, sagittis in nisl. Praesent quis dolor efficitur, maximus tortor sit amet, viverra augue.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ligula egestas blandit fermentum. Maecenas tristique rhoncus turpis efficitur blandit.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Benefits);
        }}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>MORE THAN JUST THE GYM.</HeaderText>
          <p className="my-5 text-sm">
            Cras dictum et velit at suscipit. Sed fringilla est vel tellus
            posuere fermentum. Aliquam quam tellus, pulvinar quis ligula nec,
            fermentum consectetur nibh. Proin vulputate, nunc luctus eleifend
            interdum, ante turpis porta ante, et dignissim nisi sapien at
            turpis.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION  */}

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto" //centers img
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:aboslute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HeaderText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HeaderText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Cras dictum et velit at suscipit. Sed fringilla est vel tellus
                posuere fermentum. Aliquam quam tellus, pulvinar quis ligula
                nec, fermentum consectetur nibh. Proin vulputate, nunc luctus
                eleifend interdum, ante turpis porta ante, et dignissim nisi
                sapien at turpis.
              </p>
              <p className="mb-5">
                Cras dictum et velit at suscipit. Sed fringilla est vel tellus
                posuere fermentum. Aliquam quam tellus, pulvinar quis ligula
                nec, fermentum consectetur nibh. Proin vulputate, nunc luctus
                eleifend interdum, ante turpis porta ante, et dignissim nisi
                sapien at turpis.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

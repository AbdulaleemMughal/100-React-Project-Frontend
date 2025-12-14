"use client";

import { ComponentType } from "@/types/component.type";
import { components } from "@/utils/components";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Component = () => {
  const { componentTitle } = useParams();
  const [data, setData] = useState<ComponentType | undefined>(undefined);

  useEffect(() => {
    const filteredComponent = components.find(
      (comp) => comp.name === componentTitle
    );
    setData(filteredComponent as ComponentType);
  }, [componentTitle]);

  const DynamicComponent = data?.component;

  return (
    <>
      <div className="w-7xl p-4 mx-auto max-xl:w-full">
        <div className="mt-3 flex flex-col space-y-1 text-[#2e2e2e]">
          <h1 className="text-[48px] font-semibold max-lg:text-[40px] max-md:text-[30px] max-sm:text-[24px]">
            {data?.title}
          </h1>
          <p className="mb-5 text-[24px] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[16px]">
            {data?.desc}
          </p>
          <h3 className="text-[32px] font-semibold max-lg:text-[28px] max-md:text-[22px]">
            How to use it?
          </h3>
          <p>{data?.howToUse}</p>
        </div>
        <div className="mt-5">{DynamicComponent && <DynamicComponent />}</div>
      </div>
    </>
  );
};

export default Component;

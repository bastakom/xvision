import Image from "next/image";
import dr from "@/public/dr.png";
import dr2 from "@/public/dr2.png";
import Link from "next/link";

export default function AboutBlock() {
  return (
    <div className="bg-[#1D383F] text-white px-14 pb-24 pt-20">
      <h2 className="pb-14 text-center text-[16px] text-[#CFEDC6]">
        ABOUT XVISION
      </h2>
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col gap-5">
          <h2 className="text-[50px] max-w-[80%]">
            “Varje öga är unikt men lösningen sällan långt borta”.
          </h2>
          <span>Dr. Något någon</span>
        </div>
        <div>
          <Image src={dr} alt="" width={700} height={700} />
        </div>
        <div className="flex text-[18px] flex-col justify-end gap-5">
          <p>
            Dr. Memarzadeh har erfarenhet inom refraktiv kirurgi,
            gråstarrkirurgi, glaukom kirurgi, hornhinnetransplantationer,
            konjunktivala cancer samt occuloplastic och utför årligen mer än
            3000 ögonoperationer. Dr. Memarzadeh har arbetat som överläkare vid
            Skånes universitetssjukhus i Lund samt Universitetssjukhuset i
            Linköping.
          </p>
          <Link href="/" className="underline underline-offset-8">
            Läs mer
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div />
        <Image
          src={dr2}
          alt=""
          width={400}
          height={700}
          className="-mt-32 -ml-44"
        />
      </div>
      <div />
    </div>
  );
}

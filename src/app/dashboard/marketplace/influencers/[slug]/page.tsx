import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import DashboardHeader from "@/components/dashboard-header";
import db from "../../../../../../drizzle/db";
import { influencerProfiles } from "../../../../../../drizzle/schema";
import { and, desc, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { InfluencerInfo } from "@/components/InfluencerInfo";
import { SocialInformation } from "@/components/SocialInformation";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

const getInfluencer = async (slug: string) => {
  const response = await db
    .select()
    .from(influencerProfiles)
    .where(eq(influencerProfiles.id, slug));

  return response[0];
};

const onSubmit = async () => {
  "use server";
};

export default async function MusicPage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerSession();

  const influencers = await getInfluencer(params.slug);

  if (influencers.email === (session?.user?.email as string)) {
    redirect("/dashboard/settings/profile");
  }
  return (
    <>
      <DashboardHeader />

      <div className=" md:block">
        {/* <Menu /> */}
        <div className="border-t">
          <div className="p-4 grid md:flex w-max-screen gap-4 grid-cols-1">
            <InfluencerInfo slug={params.slug} />

            <SocialInformation slug={params.slug} />
          </div>
        </div>
      </div>
    </>
  );
}

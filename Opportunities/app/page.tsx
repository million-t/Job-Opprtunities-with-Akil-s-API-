'use client'
import { useSelector, useDispatch } from "react-redux";
import { fetchOpportunities } from "@/lib/features/oppotunities/opportunitiesSlice";
import React, { useEffect } from "react";
import Card from "@/components/jobCard";
import Link from "next/link";
import { AppDispatch, RootState } from "@/lib/store";




export default function Home() {
  
  const { opportunities } = useSelector((state: RootState) => state.opportunities);
  const dispatch = useDispatch <AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchOpportunities());
  }, []);


  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <main className="flex min-h-screen flex-col items-center p-24 space-y-8">
        
        <div className="flex justify-between w-mi">
          <div className="flex-col items-left space-y-1">
            <p className="text-4xl text-mi font-black">Opportunieties</p>
            <p className="text-gray-500 mt-4 text-base">Showing {opportunities.length} results</p>
          </div>
          <div className="flex items-center">
            <p className="text-mi-gray text-base">Sort by:</p>
            <select className="ml-2 border-white text-base font-medium">
              <option>Most relevant</option>
              <option>Most recent</option>
            </select>
          </div>
        </div>
        <div className="flex-col space-y-9">
        {opportunities?.map((job: any) => ( 
                                  <div>  
                                    <Link href={`/details/${job.id}`} key={job.id}>
                                      <Card 
                                        title={job.title} 
                                        description={job.description} 
                                        position={job.opType} tags={job.categories} company={job.orgName} 
                                        address={job.location.join(" ")} avatar={job.logoUrl}></Card>
                                    </Link>
                                    </div>
                                  ))}
                                    
        </div>
      </main>
    </React.Suspense>
  );
}

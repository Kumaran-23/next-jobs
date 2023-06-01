<script>
  import humanize from "humanize-plus";
  import SvelteMarkdown from 'svelte-markdown';
  import { getUserID } from "../../../utils/auth.js";
  import { goto } from '$app/navigation';
  export let data;

  function updatePage() {
    goto(`/jobs/${data.job.id}/update`)
  }
</script>
<div class="mt-10">
  {#if data.job.user == getUserID()}
  <button class="btn mr-6 btn-md bg-purple-700 hover:bg-purple-800" on:click={updatePage}>Edit</button>
  {/if}
</div>
<div class="mt-10">
  <div class="flex">
    <div class="flex-1">
      <h1 class="text-3xl font-extrabold text-violet-300">{data.job.title}</h1>
      <p class="text-xl text-violet-300">{data.job.employer}</p>
    </div>
  </div>

  <div class="flex flex-row w-full mt-8">
    <div class="basis-2/3 prose max-w-none w-full">
      <h2 class="text-xl font-thin text-violet-300">Description</h2>
      <SvelteMarkdown class="text-violet-300" source={data.job.description} />
      <div class="mt-6" />
      <h2 class="text-xl font-thin text-violet-300">Requirements</h2>
      <SvelteMarkdown source={data.job.requirements} />
      <div class="mt-6" />
        <h2 class="text-xl font-thin text-violet-300">How to Apply?</h2>
        <p>{data.job.applicationInstructions}</p>
      </div>
      <div class="basis-1/3 ml-4">
        <h2 class="text-xl font-thin text-violet-300">Location</h2>
        <p>{data.job.location}</p>
        <div class="mt-6" />
        <h2 class="text-xl font-thin text-violet-300">Salary Range</h2>
        <p>
          USD {humanize.formatNumber(data.job.minAnnualCompensation)} - USD
          {humanize.formatNumber( data.job.maxAnnualCompensation )}
        </p>
      </div>
    </div>
  </div>
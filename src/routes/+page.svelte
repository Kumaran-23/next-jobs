<script>
import humanize from 'humanize-plus';
export let data;
</script>
<!-- <div class="flex justify-center">
  <h1 class="text-xl font-bold mr-auto ml-auto">Find Your Next Job</h1>
  <button class="btn btm-md">
    <a href='users/new'>Create Account</a>
    </button>
</div> -->
<h1 class="text-center text-xl font-bold" dark>Find Your Next Job</h1>

<div class="overflow-hidden grid grid-cols-4 gap-4">
  {#each data.jobs as job}
    <div class="flex flex-col mt-6 mb-6 card bg-primary hover:bg-primary-focus" data-theme="flex flex-col mt-6 mb-6 card bg-secondary hover:bg-secondary-focus">
      <div class="card-body">
        <a class="font-bold text-2xl" href="/jobs/{job.id}">{job.title}</a>
        <div class="text-sm mt-1">
          {job.employer} . {job.location} . <span class="text-sm">USD {humanize.formatNumber(job.minAnnualCompensation)} - USD {humanize.formatNumber(job.maxAnnualCompensation)}</span>
        </div>
        <div class="italic text-xs opacity-50 mt-2">posted {new Date(job.created).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</div>
      </div>
      <div class="mt-2 card-body">
        {job.description.slice(0, 240)}...
      </div>
    </div>
  {/each}
</div>
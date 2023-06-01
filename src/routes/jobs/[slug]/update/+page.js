import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { getUserID } from '../../../../utils/auth';
import { redirect } from '@sveltejs/kit';

export async function load({ fetch, params }) {
  const resp = await fetch(PUBLIC_BACKEND_BASE_URL + `/api/collections/jobs/records/${params.slug}`);
  const res = await resp.json();
  const userId = getUserID();

  // if (res.user !== userId) {
  //   throw (redirect(307, 'jobs/${res.id}'))
  // }

  if (resp.status == 200) {
    return {
      job: res
    }
  } else {
    return {
      jobs: []
    }
  }
}


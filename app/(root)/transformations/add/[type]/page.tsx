import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';



const AddTransformationTypePage = ({ params:{ type }}:SearchParamProps) => {
  
  
  const { userId }= auth();
  const transformation= transformationTypes[type];
  if (!userId) redirect('/sign-in')
  const user = getUserById(userId); 
  return (
  <>

    <Header
     title={transformation.title}
    subtitle={transformation.subTitle}
    /> 
      
      <section className='mt-10'>
        
            <TransformationForm action={'Add'} userId={''} type={'restore'} creditBalance={1}      //action="Add"
       
      />
</section>
  </>
    )

}

export default AddTransformationTypePage;

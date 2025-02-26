import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { GrEdit } from 'react-icons/gr';
import profilePicture from '../../assets/images/christina-thumbnail.png';
import { MdArrowDropDown } from 'react-icons/md';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  presentAddress: z.string().min(1, 'Present address is required'),
  permanentAddress: z.string().min(1, 'Permanent address is required'),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().min(1, 'Country is required'),
});

type FormData = z.infer<typeof formSchema>;

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col sm:flex-row  gap-y-6 gap-x-[10%] ">
      {/* Profile Picture Section */}
      <div className="lg:w-1/10">
        <div className="relative mx-auto sm:w-24 sm:h-24 w-[90px] h-[90px]">
          <img
            src={profilePicture}
            alt="Profile"
            title="Profile picture"
            className="w-full h-full object-cover rounded-full"
            aria-label="Profile picture"
          />
          <button
            className="absolute bottom-1 right-1 bg-black p-2 rounded-full bg-skin-black shadow-lg"
            aria-label="Edit profile picture"
          >
            <GrEdit className="text-skin-white" title="Edit profile picture" />
          </button>
        </div>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Row 1 */}
        <div className="form-group">
          <label htmlFor="name" className="block mb-2">
            Your Name
            <input
              {...register('name')}
              type="text"
              id="name"
              placeholder="Charleen Reed"
              className="mt-1 block w-full pl-10 h-9 rounded-md  border border-color-bg-dirty-white shadow-sm  hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Enter your full name"
            />
          </label>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="username" className="block mb-2">
            User Name
            <input
              {...register('username')}
              type="text"
              id="username"
              placeholder="Charleen Reed"
              className="mt-1 block w-full pl-10 h-9 rounded-md  border border-color-bg-dirty-white shadow-sm  hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Enter your username"
            />
          </label>
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Row 2 */}
        <div className="form-group">
          <label htmlFor="email" className="block mb-2">
            Email
            <input
              {...register('email')}
              type="email"
              id="email"
              placeholder="charlenereed@gmail.com"
              className="mt-1 block w-full pl-10 h-9 rounded-md  border border-color-bg-dirty-white shadow-sm  hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Enter your email address"
            />
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="block mb-2">
            Password
            <input
              {...register('password')}
              type="password"
              id="password"
              placeholder="******"
              className="mt-1 block w-full pl-10 h-9 rounded-md  border border-color-bg-dirty-white shadow-sm  hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Enter your password"
            />
          </label>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Row 3 */}
        <div className="form-group">
          <label htmlFor="dateOfBirth" className="block mb-2">
            Date of Birth
            <div className="relative">
              <input
                {...register('dateOfBirth')}
                type="date"
                id="dateOfBirth"
                placeholder="2025-01-01"
                className="mt-1 block w-full pl-10 h-9 rounded-md border border-color-bg-dirty-white shadow-sm hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
                aria-label="Select your date of birth"
                style={{ colorScheme: 'normal' }}
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() =>
                  (
                    document.getElementById('dateOfBirth') as HTMLInputElement
                  ).showPicker()
                }
              >
                <MdArrowDropDown className="text-gray-500 text-xl" />
              </div>
            </div>
          </label>
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dateOfBirth.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="presentAddress" className="block mb-2">
            Present Address
            <input
              {...register('presentAddress')}
              type="text"
              id="presentAddress"
              placeholder="Sanjose, California, USA"
              className="mt-1 block w-full pl-10 h-9 rounded-md  border border-color-bg-dirty-white shadow-sm  hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Enter your present address"
            />
          </label>
          {errors.presentAddress && (
            <p className="text-red-500 text-sm mt-1">
              {errors.presentAddress.message}
            </p>
          )}
        </div>

        {/* Row 4 */}
        <div className="form-group">
          <label htmlFor="permanentAddress" className="block mb-2">
            Permanent Address
            <input
              {...register('permanentAddress')}
              type="text"
              id="permanentAddress"
              placeholder="San Jose, California"
              className="mt-1 block w-full pl-10 h-9 rounded-md  border border-color-bg-dirty-white shadow-sm  hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Enter your permanent address"
            />
          </label>
          {errors.permanentAddress && (
            <p className="text-red-500 text-sm mt-1">
              {errors.permanentAddress.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="city" className="block mb-2">
            City
            <input
              {...register('city')}
              type="text"
              id="city"
              placeholder="San jose"
              className="mt-1 block w-full pl-10 h-9 rounded-md  border border-color-bg-dirty-white shadow-sm  hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Enter your city"
            />
          </label>
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* Row 5 */}
        <div className="form-group">
          <label htmlFor="postalCode" className="block mb-2">
            Postal Code
            <input
              {...register('postalCode')}
              type="text"
              id="postalCode"
              placeholder="45962"
              className="mt-1 block w-full pl-10 h-9 rounded-md  border border-color-bg-dirty-white shadow-sm  hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Enter your postal code"
            />
          </label>
          {errors.postalCode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.postalCode.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="country" className="block mb-2">
            Country
            <input
              {...register('country')}
              type="text"
              id="country"
              placeholder="USA"
              className="mt-1 block w-full pl-10 h-9 rounded-md border border-color-bg-dirty-white shadow-sm  hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Enter your country"
            />
          </label>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>
        {/* To force the button to the other half of the screen */}
        <div className="flex w-full justify-end"></div>
        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="w-full sm:w-[20vh] mt-4 sm:mb-4 rounded bg-skin-black hover:bg-skin-black hover:opacity-75 text-white text-sm py-2 px-4"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Hotel
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Админ.
    /// </summary>
    // *** Start programmer edit section *** (Админ CustomAttributes)

    // *** End programmer edit section *** (Админ CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("АдминE", new string[] {
            "Гостиница as \'Гостиница\'",
            "Гостиница.Название as \'Название\'",
            "Персонал as \'Персонал\'"}, Hidden=new string[] {
            "Гостиница.Название"})]
    [MasterViewDefineAttribute("АдминE", "Гостиница", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Название")]
    [MasterViewDefineAttribute("АдминE", "Персонал", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    [View("АдминL", new string[] {
            "Гостиница.Название as \'Название\'"})]
    public class Админ : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Hotel.Гостиница fГостиница;
        
        private IIS.Hotel.Персонал fПерсонал;
        
        // *** Start programmer edit section *** (Админ CustomMembers)

        // *** End programmer edit section *** (Админ CustomMembers)

        
        /// <summary>
        /// Админ.
        /// </summary>
        // *** Start programmer edit section *** (Админ.Гостиница CustomAttributes)

        // *** End programmer edit section *** (Админ.Гостиница CustomAttributes)
        [PropertyStorage(new string[] {
                "Гостиница"})]
        [NotNull()]
        public virtual IIS.Hotel.Гостиница Гостиница
        {
            get
            {
                // *** Start programmer edit section *** (Админ.Гостиница Get start)

                // *** End programmer edit section *** (Админ.Гостиница Get start)
                IIS.Hotel.Гостиница result = this.fГостиница;
                // *** Start programmer edit section *** (Админ.Гостиница Get end)

                // *** End programmer edit section *** (Админ.Гостиница Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Админ.Гостиница Set start)

                // *** End programmer edit section *** (Админ.Гостиница Set start)
                this.fГостиница = value;
                // *** Start programmer edit section *** (Админ.Гостиница Set end)

                // *** End programmer edit section *** (Админ.Гостиница Set end)
            }
        }
        
        /// <summary>
        /// Админ.
        /// </summary>
        // *** Start programmer edit section *** (Админ.Персонал CustomAttributes)

        // *** End programmer edit section *** (Админ.Персонал CustomAttributes)
        [PropertyStorage(new string[] {
                "Персонал"})]
        [NotNull()]
        public virtual IIS.Hotel.Персонал Персонал
        {
            get
            {
                // *** Start programmer edit section *** (Админ.Персонал Get start)

                // *** End programmer edit section *** (Админ.Персонал Get start)
                IIS.Hotel.Персонал result = this.fПерсонал;
                // *** Start programmer edit section *** (Админ.Персонал Get end)

                // *** End programmer edit section *** (Админ.Персонал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Админ.Персонал Set start)

                // *** End programmer edit section *** (Админ.Персонал Set start)
                this.fПерсонал = value;
                // *** Start programmer edit section *** (Админ.Персонал Set end)

                // *** End programmer edit section *** (Админ.Персонал Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "АдминE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АдминE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АдминE", typeof(IIS.Hotel.Админ));
                }
            }
            
            /// <summary>
            /// "АдминL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АдминL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АдминL", typeof(IIS.Hotel.Админ));
                }
            }
        }
    }
}

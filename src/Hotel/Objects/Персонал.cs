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
    /// Персонал.
    /// </summary>
    // *** Start programmer edit section *** (Персонал CustomAttributes)

    // *** End programmer edit section *** (Персонал CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПерсоналE", new string[] {
            "ПаспДанные as \'Пасп данные\'",
            "ПаспДанные.ФИО as \'ФИО\'",
            "Должность as \'Должность\'",
            "Должность.Название as \'Название\'"}, Hidden=new string[] {
            "ПаспДанные.ФИО",
            "Должность.Название"})]
    [MasterViewDefineAttribute("ПерсоналE", "ПаспДанные", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("ПерсоналE", "Должность", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Название")]
    [View("ПерсоналL", new string[] {
            "ПаспДанные.ФИО as \'ФИО\'",
            "Должность.Название as \'Название\'"})]
    public class Персонал : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Hotel.ПаспДанные fПаспДанные;
        
        private IIS.Hotel.Должность fДолжность;
        
        // *** Start programmer edit section *** (Персонал CustomMembers)

        // *** End programmer edit section *** (Персонал CustomMembers)

        
        /// <summary>
        /// Персонал.
        /// </summary>
        // *** Start programmer edit section *** (Персонал.Должность CustomAttributes)

        // *** End programmer edit section *** (Персонал.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.Hotel.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (Персонал.Должность Get start)

                // *** End programmer edit section *** (Персонал.Должность Get start)
                IIS.Hotel.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (Персонал.Должность Get end)

                // *** End programmer edit section *** (Персонал.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Персонал.Должность Set start)

                // *** End programmer edit section *** (Персонал.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (Персонал.Должность Set end)

                // *** End programmer edit section *** (Персонал.Должность Set end)
            }
        }
        
        /// <summary>
        /// Персонал.
        /// </summary>
        // *** Start programmer edit section *** (Персонал.ПаспДанные CustomAttributes)

        // *** End programmer edit section *** (Персонал.ПаспДанные CustomAttributes)
        [PropertyStorage(new string[] {
                "ПаспДанные"})]
        [NotNull()]
        public virtual IIS.Hotel.ПаспДанные ПаспДанные
        {
            get
            {
                // *** Start programmer edit section *** (Персонал.ПаспДанные Get start)

                // *** End programmer edit section *** (Персонал.ПаспДанные Get start)
                IIS.Hotel.ПаспДанные result = this.fПаспДанные;
                // *** Start programmer edit section *** (Персонал.ПаспДанные Get end)

                // *** End programmer edit section *** (Персонал.ПаспДанные Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Персонал.ПаспДанные Set start)

                // *** End programmer edit section *** (Персонал.ПаспДанные Set start)
                this.fПаспДанные = value;
                // *** Start programmer edit section *** (Персонал.ПаспДанные Set end)

                // *** End programmer edit section *** (Персонал.ПаспДанные Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПерсоналE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПерсоналE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПерсоналE", typeof(IIS.Hotel.Персонал));
                }
            }
            
            /// <summary>
            /// "ПерсоналL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПерсоналL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПерсоналL", typeof(IIS.Hotel.Персонал));
                }
            }
        }
    }
}

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
    /// Т ч2.
    /// </summary>
    // *** Start programmer edit section *** (ТЧ2 CustomAttributes)

    // *** End programmer edit section *** (ТЧ2 CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч2")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧ2E", new string[] {
            "НомерКомнаты as \'Номер комнаты\'",
            "Прибытие as \'Прибытие\'",
            "Убытие as \'Убытие\'",
            "Персонал as \'Персонал\'"})]
    [MasterViewDefineAttribute("ТЧ2E", "Персонал", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    public class ТЧ2 : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерКомнаты;
        
        private System.DateTime fПрибытие;
        
        private System.DateTime fУбытие;
        
        private IIS.Hotel.Персонал fПерсонал;
        
        private IIS.Hotel.ЖРИГ fЖРИГ;
        
        // *** Start programmer edit section *** (ТЧ2 CustomMembers)

        // *** End programmer edit section *** (ТЧ2 CustomMembers)

        
        /// <summary>
        /// НомерКомнаты.
        /// </summary>
        // *** Start programmer edit section *** (ТЧ2.НомерКомнаты CustomAttributes)

        // *** End programmer edit section *** (ТЧ2.НомерКомнаты CustomAttributes)
        public virtual int НомерКомнаты
        {
            get
            {
                // *** Start programmer edit section *** (ТЧ2.НомерКомнаты Get start)

                // *** End programmer edit section *** (ТЧ2.НомерКомнаты Get start)
                int result = this.fНомерКомнаты;
                // *** Start programmer edit section *** (ТЧ2.НомерКомнаты Get end)

                // *** End programmer edit section *** (ТЧ2.НомерКомнаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧ2.НомерКомнаты Set start)

                // *** End programmer edit section *** (ТЧ2.НомерКомнаты Set start)
                this.fНомерКомнаты = value;
                // *** Start programmer edit section *** (ТЧ2.НомерКомнаты Set end)

                // *** End programmer edit section *** (ТЧ2.НомерКомнаты Set end)
            }
        }
        
        /// <summary>
        /// Прибытие.
        /// </summary>
        // *** Start programmer edit section *** (ТЧ2.Прибытие CustomAttributes)

        // *** End programmer edit section *** (ТЧ2.Прибытие CustomAttributes)
        public virtual System.DateTime Прибытие
        {
            get
            {
                // *** Start programmer edit section *** (ТЧ2.Прибытие Get start)

                // *** End programmer edit section *** (ТЧ2.Прибытие Get start)
                System.DateTime result = this.fПрибытие;
                // *** Start programmer edit section *** (ТЧ2.Прибытие Get end)

                // *** End programmer edit section *** (ТЧ2.Прибытие Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧ2.Прибытие Set start)

                // *** End programmer edit section *** (ТЧ2.Прибытие Set start)
                this.fПрибытие = value;
                // *** Start programmer edit section *** (ТЧ2.Прибытие Set end)

                // *** End programmer edit section *** (ТЧ2.Прибытие Set end)
            }
        }
        
        /// <summary>
        /// Убытие.
        /// </summary>
        // *** Start programmer edit section *** (ТЧ2.Убытие CustomAttributes)

        // *** End programmer edit section *** (ТЧ2.Убытие CustomAttributes)
        public virtual System.DateTime Убытие
        {
            get
            {
                // *** Start programmer edit section *** (ТЧ2.Убытие Get start)

                // *** End programmer edit section *** (ТЧ2.Убытие Get start)
                System.DateTime result = this.fУбытие;
                // *** Start programmer edit section *** (ТЧ2.Убытие Get end)

                // *** End programmer edit section *** (ТЧ2.Убытие Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧ2.Убытие Set start)

                // *** End programmer edit section *** (ТЧ2.Убытие Set start)
                this.fУбытие = value;
                // *** Start programmer edit section *** (ТЧ2.Убытие Set end)

                // *** End programmer edit section *** (ТЧ2.Убытие Set end)
            }
        }
        
        /// <summary>
        /// Т ч2.
        /// </summary>
        // *** Start programmer edit section *** (ТЧ2.Персонал CustomAttributes)

        // *** End programmer edit section *** (ТЧ2.Персонал CustomAttributes)
        [PropertyStorage(new string[] {
                "Персонал"})]
        [NotNull()]
        public virtual IIS.Hotel.Персонал Персонал
        {
            get
            {
                // *** Start programmer edit section *** (ТЧ2.Персонал Get start)

                // *** End programmer edit section *** (ТЧ2.Персонал Get start)
                IIS.Hotel.Персонал result = this.fПерсонал;
                // *** Start programmer edit section *** (ТЧ2.Персонал Get end)

                // *** End programmer edit section *** (ТЧ2.Персонал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧ2.Персонал Set start)

                // *** End programmer edit section *** (ТЧ2.Персонал Set start)
                this.fПерсонал = value;
                // *** Start programmer edit section *** (ТЧ2.Персонал Set end)

                // *** End programmer edit section *** (ТЧ2.Персонал Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Hotel.ЖРИГ.
        /// </summary>
        // *** Start programmer edit section *** (ТЧ2.ЖРИГ CustomAttributes)

        // *** End programmer edit section *** (ТЧ2.ЖРИГ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ЖРИГ"})]
        public virtual IIS.Hotel.ЖРИГ ЖРИГ
        {
            get
            {
                // *** Start programmer edit section *** (ТЧ2.ЖРИГ Get start)

                // *** End programmer edit section *** (ТЧ2.ЖРИГ Get start)
                IIS.Hotel.ЖРИГ result = this.fЖРИГ;
                // *** Start programmer edit section *** (ТЧ2.ЖРИГ Get end)

                // *** End programmer edit section *** (ТЧ2.ЖРИГ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧ2.ЖРИГ Set start)

                // *** End programmer edit section *** (ТЧ2.ЖРИГ Set start)
                this.fЖРИГ = value;
                // *** Start programmer edit section *** (ТЧ2.ЖРИГ Set end)

                // *** End programmer edit section *** (ТЧ2.ЖРИГ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧ2E" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧ2E
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧ2E", typeof(IIS.Hotel.ТЧ2));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧ2.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧ2 CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧ2 CustomAttributes)
    public class DetailArrayOfТЧ2 : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Hotel.DetailArrayOfТЧ2 members)

        // *** End programmer edit section *** (IIS.Hotel.DetailArrayOfТЧ2 members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧ2 by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧ2.
        /// </summary>
        public DetailArrayOfТЧ2(IIS.Hotel.ЖРИГ fЖРИГ) : 
                base(typeof(ТЧ2), ((ICSSoft.STORMNET.DataObject)(fЖРИГ)))
        {
        }
        
        public IIS.Hotel.ТЧ2 this[int index]
        {
            get
            {
                return ((IIS.Hotel.ТЧ2)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Hotel.ТЧ2 dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
